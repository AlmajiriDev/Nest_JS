import { Module } from "@nestjs/common";
// import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { JwtStrategy } from "src/strategies/jwt.strategy";
import { UserModule } from "src/users/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./constants";

@Module ({
    imports: [UserModule, TypeOrmModule.forFeature([User]), PassportModule, JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),
    ],
    exports: [UserModule, AuthService],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {}