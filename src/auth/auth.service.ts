import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { MongoRepository } from "typeorm";
import { UserDto } from "./dto/auth.dto";
import * as bcrypt from 'bcrypt';
import { loginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";
import { JwtStrategy } from "src/strategies/jwt.strategy";
import { ConfigService } from "@nestjs/config";
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: MongoRepository<User>,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {}

    async getProfile(){
        return {
            message: "This is a protect profile route"
        }
    }

    // adding new users
    async signup(userdto: UserDto) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(userdto.password, salt)
        const user = await this.create({...userdto, password: hashedPassword})
        delete user.password
        return user
    }
    async create(userdto: UserDto): Promise<User>{
        return this.usersRepository.save(userdto)
    }


    
    //sign in exisiting users 
    async findOne(email: string){
      return this.usersRepository.findOneBy({email})

    }
   async signin(loginData: loginDto): Promise<any> {
        const user = await this.findOne(loginData.email);
        if(!user){
            throw new ForbiddenException('Invalid Email');
        }

        const pWMatches = bcrypt.compare(loginData.password, user.password)
        // delete user.password
        
        
        const access_token = this.jwtService.sign({user})
        // console.log(access_token)
        return {
            "access_token": access_token
        }
    }
    }

