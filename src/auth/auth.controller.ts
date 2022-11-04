import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDto } from "./dto/auth.dto";
import { loginDto } from "./dto/login.dto";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { LocalAuthGuard } from "src/auth/guards/local-auth-guard";
import { UsersService } from "src/users/user.service";


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private userService: UsersService){}

@Post('signup')
async signup(@Body() userdto: UserDto){
        return this.userService.signUpUser(userdto)
}

// @UseGuards(LocalAuthGuard)
@UseGuards(LocalAuthGuard)
@Post('signin')
 async signin(@Body() loginData: loginDto) {
         return this.authService.validateUserCredentials(loginData.email, loginData.password)
  }

}

