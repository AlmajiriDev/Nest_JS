import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class loginDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;

}    