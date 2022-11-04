import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from 'bcrypt';
import { UserDto } from "src/auth/dto/auth.dto";
import { MongoRepository, Repository } from "typeorm";
import { User } from "../entity/user.entity";


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: MongoRepository<User>
    ) {}

    // NEW USER REGISTRATION
    async signUpUser(userdto: UserDto){
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(userdto.password, 10)
        const user = await this.create({...userdto, password: hashedPassword})
        delete user.password
        return user
    }
    async create(userdto: UserDto): Promise<User>{
        return this.usersRepository.save(userdto)
    }
    


    async getUserByEmail(email: string): Promise<User> | undefined{
        return await this.usersRepository.findOneBy({email: email})
    }
}


