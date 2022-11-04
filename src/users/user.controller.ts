import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { LocalAuthGuard } from "src/auth/guards/local-auth-guard";


@Controller()
export class UserController {
    constructor(private authService: AuthService){}




@UseGuards(LocalAuthGuard)
@Get('me')
getProfile(): String  {
            return "This is a protected route"
       }
}
