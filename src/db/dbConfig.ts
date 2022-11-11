// import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';

      export  default function dbConfig(): TypeOrmModuleOptions {
        return {
                type: 'mongodb',
                url: "",
                database: "user",
                entities: [User],
                ssl: true,
                useUnifiedTopology: true,
                useNewUrlParser: true 
        }
}