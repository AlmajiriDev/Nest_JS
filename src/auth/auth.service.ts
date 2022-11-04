import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { MongoRepository } from "typeorm";
import { UserDto } from "./dto/auth.dto";
import * as bcrypt from 'bcrypt';
import { loginDto } from "./dto/login.dto";
import { JwtService, JwtSignOptions } from "@nestjs/jwt";
import { JwtStrategy } from "src/auth/strategies/jwt.strategy";
import { ConfigService } from "@nestjs/config";
import { UsersService } from "src/users/user.service";
@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
    ) {}

    
//    async signin(loginData: loginDto): Promise<any> {
//         const user = await this.findOne(loginData.email);
//         if(!user){
//             throw new ForbiddenException('Invalid Email');
//         }

//         const pWMatches = bcrypt.compare(loginData.password, user.password)
//         // delete user.password
        
        
//         const access_token = this.jwtService.sign({user})
//         // console.log(access_token)
//         return {
//             "access_token": access_token
//         }
//     }



// Another signin method

    async validateUserCredentials(email: string, password: string): Promise<User>{
        const user = await this.userService.getUserByEmail(email)

        if(!user) throw new BadRequestException()

        const isMatching = await bcrypt.compare(password, user.password)
        console.log(isMatching)
        if(!isMatching) throw new UnauthorizedException()

         return user
        }
    }

