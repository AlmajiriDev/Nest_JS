import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { MongoRepository } from "typeorm";
import { UserDto } from "./dto/user.dto";
import * as bcrypt from 'bcrypt';
import { loginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { UsersService } from "src/users/user.service";
import { jwtConstants } from "./constants";

@Injectable()
export class AuthService {
    constructor(
      @InjectRepository(User)
        private usersRepository: MongoRepository<User>,
        private userService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService
    ) {}


    // NEW USER REGISTRATION BY EMAIL
    async signUpUser(userdto: UserDto){
        
      const IsUser = await this.userService.getUserByEmail(userdto.email)
      
      if (IsUser) {
          throw new BadRequestException('Email is already in use');
      }
      
      // const salt = await bcrypt.genSalt(10)
      const hashedPassword  = await bcrypt.hash(userdto.password, 10)
      const user = await this.create({...userdto, password: hashedPassword})
      
      const authTokens = await this.generateAuthTokens(user._id, user.firstName, user.lastName)
      await this.updateRefreshToken(user._id, authTokens.refreshToken)
      
      return authTokens
  }
   
  async create(userdto: UserDto): Promise<User>{
      return this.usersRepository.save(userdto)
  }

  // // SIGN UP OAUTH USER

  // async signUpOauth(userdto: UserDto){
  //   const user = await this.userService.findOne({
  //     where: {provider: 'google', email: userdto.email}
  //     })

  //     if (!user){
  //       const newUser = await this.userService.createOauthUser(userdto)
  //     }

  // }


//  signin method

    async validateUserCredentials(loginData: loginDto): Promise<any>{
        const user = await this.userService.getUserByEmail(loginData.email)

        if(!user) throw new BadRequestException()

        const isMatching = await bcrypt.compare(loginData.password, user.password)
        console.log(isMatching)
        if(!isMatching) throw new UnauthorizedException()

        const authTokens  = await this.generateAuthTokens(user._id, user.firstName, user.lastName)
        await this.updateRefreshToken(user._id, authTokens.refreshToken)
        
        return authTokens
        }

    async signout(id: any) {
      return this.userService.findAndUpdateTokenById(id, { refreshToken: null });
    }

      async updateRefreshToken(id: any, refreshToken: string) {
          const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
          this.userService.findAndUpdateTokenById(id, { 
            refreshToken: hashedRefreshToken
          });
        }    
    
      async generateAuthTokens(id: any, firstName: string, lastName: string){
          const [accessToken, refreshToken] = await Promise.all([
              this.jwtService.signAsync(
                {
                  sub: id,
                  firstName,
                  lastName
                },
                {
                  // secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
                  secret: jwtConstants.secret,
                  expiresIn: '60s',
                },
              ),
              this.jwtService.signAsync(
                {
                  sub: id,
                  firstName,
                  lastName
                },
                {
                  // secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
                  secret: jwtConstants.refSecret,
                  expiresIn: '7d',
                },
              ),
            ]);
        
            return {
              accessToken,
              refreshToken,
            };
      }


      async refreshTokens(id: string, refreshToken: string){
        const user = await this.userService.getUserById(id)
        // console.log(user)
        if(!user || !user.refreshToken) throw new ForbiddenException ('Access Denied')
        
        const tokenIsMatch = await bcrypt.compare(refreshToken, user.refreshToken)
        if(!tokenIsMatch) throw new ForbiddenException('Access Denied')

        const authTokens = await this.generateAuthTokens(user._id, user.firstName, user.lastName)
        await this.updateRefreshToken(user._id, authTokens.refreshToken)
      
        return authTokens
      }
    }
