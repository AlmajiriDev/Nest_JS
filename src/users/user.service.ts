import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateUserDto } from "src/auth/dto/udpate-user.dto";
import { FindOneOptions, MongoRepository, ObjectID, Repository } from "typeorm";
import { UserDto } from "src/auth/dto/user.dto";
import { User } from "src/entity/user.entity";



@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: MongoRepository<User>,
    ) {}
    
    createOauthUser(userdto: UserDto) {
        return this.usersRepository.save(userdto);
      }
    
    
    async findOne(params:  FindOneOptions<User>) {
        return this.usersRepository.findOne(params)
    }
    

    async getUserByEmail(email: string): Promise<any> | undefined{
        return await this.usersRepository.findOneBy({email: email})
    }
    async getUserById(id: any): Promise<any> | undefined{
        return await this.usersRepository.findOne(id)
    }

    async findAndUpdateTokenById(id: any, updateUserDto: UpdateUserDto): Promise<User> {
            const user =  await this.usersRepository.findOne(id)
            user.refreshToken = updateUserDto.refreshToken 
            return await this.usersRepository.save(user)
    }
}


