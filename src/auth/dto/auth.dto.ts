import { IsEmail, IsNotEmpty, IsString } from 'class-validator';


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
    password: string;
  }
  
  