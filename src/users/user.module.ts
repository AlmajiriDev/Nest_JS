import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from '../entity/user.entity';
import { UsersService } from './user.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
    imports: [TypeOrmModule.forFeature([User]), UserModule],
    providers: [UsersService, AuthService],
    exports: [UsersService],
    controllers: [UserController],
})

export class UserModule {}
