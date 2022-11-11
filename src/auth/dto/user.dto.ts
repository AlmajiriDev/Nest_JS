import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Provider } from 'src/common/types/user';


export class UserDto {
    
    @IsNotEmpty()
    @IsString()
    provider: Provider;
    
    @IsNotEmpty()
    @IsString()
    providerId: string;
    
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
 
    refreshToken?: string;
  }
  
  