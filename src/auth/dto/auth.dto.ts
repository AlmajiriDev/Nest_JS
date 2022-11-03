import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';


export class UserDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsString()  
    @IsNotEmpty()
    lastName: string;
    
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
  }
  
  