// import { PassportStrategy } from "@nestjs/passport";
// import { InjectRepository } from "@nestjs/typeorm";
// import { Profile } from "passport";
// import { Strategy } from "passport-google-oauth2";
// import { VerifyCallback } from "passport-google-oauth2";
// import { User, UserDto } from "src/entity/user.entity";
// import { UsersService } from "src/users/user.service";
// import { MongoRepository } from "typeorm";
// import { AuthService } from "../auth.service";

// export class GoogleOauthStrategy extends PassportStrategy(Strategy, 'google'){
//     constructor(
//         @InjectRepository(User)
//         private usersRepository: MongoRepository<User>,
//         private readonly userService: UsersService, 
//     ){
//         super({
//             // clientID:     GOOGLE_CLIENT_ID,
//             // clientSecret: GOOGLE_CLIENT_SECRET,
//             // callbackURL: "http://yourdomain:3000/auth/google/callback",
//             passReqToCallback   : true,
//             scope: ['email', 'profile']
//         })
//     }
 
//     async validate(
//         _accessToken: string,
//         _refreshToken: string,
//         profile: any,
//         done: VerifyCallback,
//       ): Promise<any> {
//         const { id, name, emails } = profile;

//         const user = {
//             provider: 'google',
//             providerId: id,
//             email: emails[0].value,
//             firstName: name.givenName, 
//             lastName: name.familyName,
//             password: ""            
//           }
//           done(null, user);
//         }
        




//         // let user = this.userService.findOne({
//         //     where: {provider: 'google', providerId: id},
//         // })
//         // if (!user) {
//         //      const user = await this.userService.createOauthUser({
//         //        provider: 'google',
//         //        providerId: id,
//         //        firstName: name.givenName,
//         //        lastName: name.familyName,
//         //        email: emails[0].value,
//         //        password: ""
//         //    })
//         // }
//         // return user



//     } 
// }

