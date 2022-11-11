import { Exclude } from 'class-transformer';
import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';


@Entity('users')
export class User {
  
  @ObjectIdColumn() 
  _id: ObjectID;

  @Column() provider: Provider;
  @Column() providerId: string;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column({unique: true}) email: string;
  @Column() password: string;
  @Column() refreshToken?: string;
  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger'
import { Provider } from 'src/common/types/user';

export class UserDto {
    
    @IsString()
    provider: Provider;

    @IsString()
    providerId?: string;
    
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
  
  