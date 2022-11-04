import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { LocalAuthGuard } from "src/auth/guards/local-auth-guard";
import { UserModule } from "src/users/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./constants";
import { LocalStrategy } from "./strategies/local-strategy";
import { UsersService } from "src/users/user.service";

@Module ({
    imports: [UserModule, TypeOrmModule.forFeature([User]), 
    PassportModule, 
    // JwtModule.register({
    //     secret: jwtConstants.secret,
    //     signOptions: { expiresIn: '60s' },
    //   }),
    ],
    exports: [UserModule, AuthService],
    controllers: [AuthController],
    providers: [AuthService, UsersService, LocalAuthGuard, LocalStrategy],
})
export class AuthModule {}