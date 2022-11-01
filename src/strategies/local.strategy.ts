// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-local';
// import { AuthService } from 'src/auth/auth.service';
// import { User } from 'src/entity/user.entity';
// import { MongoRepository } from 'typeorm';


// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly authService: AuthService, usersRepository: MongoRepository<User>  ) {
//     super();
//   }

//   async validate(email: string, password: string): Promise<User> {
//     const user = await this.authService.validateUser(email, password);
//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     return user;
//   }
// }