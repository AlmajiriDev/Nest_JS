import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './user.controller';
import { User } from '../entity/user.entity';
import { UsersService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersService],
    controllers: [UsersController]
})

export class UserModule {}







// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersService } from './users.service';
// import { UsersController } from './users.controller';
// import { User } from './user.entity';

// @Module({
//   imports: [TypeOrmModule.forFeature([User])],
//   providers: [UsersService],
//   controllers: [UsersController],
// })
// export class UsersModule {}