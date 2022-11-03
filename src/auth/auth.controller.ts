import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDto } from "./dto/auth.dto";
import { loginDto } from "./dto/login.dto";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "src/strategies/jwt-auth.guard";


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

@Post('signup')
async signup(@Body() userdto: UserDto){
        return this.authService.signup(userdto)
}

@Post('signin')
async signin(@Body() loginData: loginDto) {
        return this.authService.signin(loginData)
}

@UseGuards(JwtAuthGuard)
@Get('me')
getProfile(): String  {
        return "This is a protected route"
}

}

