import { Body, Controller, Get, Post, Req, UseGuards} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDto } from "./dto/user.dto";
import { UsersService } from "src/users/user.service";
import { loginDto } from "./dto/login.dto";
import { Request } from "express";
import { AccessTokenGuard } from "./guards/access-token.guard";
import { RefreshTokenGuard } from "./guards/refreshToken.guard";


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private userService: UsersService){}

@Post('signup')
async signup(@Body() userdto: UserDto){
        return this.authService.signUpUser(userdto)
}

@Post('signin')
async signin(@Body() loginData: loginDto){
        return this.authService.validateUserCredentials(loginData)
}

@UseGuards(AccessTokenGuard)
@Get('signout')
async signout(@Req() req: Request){
        this.authService.signout(req.user['sub'])
}

@UseGuards(RefreshTokenGuard)
@Get('refresh')
refreshTokens(@Req() req: Request) {
  const id = req.user['sub'];
  const refreshToken = req.user['refreshToken'];
  return this.authService.refreshTokens(id, refreshToken);
}

}

