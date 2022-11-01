import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
// import { ObjectID } from "typeorm";
import { User } from "../entity/user.entity";


@Controller('users')
export class UsersController {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: MongoRepository<User>,
    ) {}

//     @Post('create')
//     async createUser(@Body() user: Partial<User>): Promise<User> {
//   if (!user || !user.firstName || !user.email) {
//     throw new BadRequestException(`Please enter name an email to continue`);
//   }
//   return await this.usersRepository.save(new User(user));


}