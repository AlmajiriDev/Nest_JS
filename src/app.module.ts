import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './entity/user.entity';
import { UserModule } from './users/user.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule, UserModule,
    TypeOrmModule.forRoot({
    type: 'mongodb',
      
      // url: process.env.MONGODB_CONNECTION_STRING,
      // database: process.env.MONGODB_DATABASE,
      entities: [User],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true 
  }), 
TypeOrmModule.forFeature([User]),
]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}