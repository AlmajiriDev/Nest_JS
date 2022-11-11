import { Controller, Get } from "@nestjs/common";



@Controller()
export class UserController {
    constructor(){}


@Get('me')
getProfile(): String  {
            return "This is a protected route"
       }
}
