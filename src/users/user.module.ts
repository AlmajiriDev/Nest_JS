import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from '../entity/user.entity';
import { UsersService } from './user.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersService, AuthService, JwtService],
    exports: [UsersService],
    controllers: [UserController],
})

export class UserModule {}
