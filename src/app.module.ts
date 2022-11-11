import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import dbConfig from './db/dbConfig';
import { User } from './entity/user.entity';
import { UserModule } from './users/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    AuthModule, UserModule,
    TypeOrmModule.forRoot(dbConfig()),
    TypeOrmModule.forFeature([User]),
]
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}