import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { UserModule } from "src/users/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersService } from "src/users/user.service";
import { AccessTokenStrategy } from "./strategies/accessToken.strategy";
import { RefreshTokenStrategy } from "./strategies/refreshToken.strategy";
import { ConfigModule } from "@nestjs/config";

@Module ({
    imports: [UserModule, TypeOrmModule.forFeature([User]), 
    PassportModule, 
    JwtModule.register({}), ConfigModule,
    ],
    exports: [UsersService, AuthService],
    controllers: [AuthController],
    providers: [AuthService, UsersService, AccessTokenStrategy, RefreshTokenStrategy]
    
})
export class AuthModule {}