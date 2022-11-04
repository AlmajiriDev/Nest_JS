// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { jwtConstants } from 'src/auth/constants';

// @Injectable()
// export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh-token') {

//   constructor() {
//     super({
//       jwtFromRequest: ExtractJwt.fromBodyField('refresh_token'),
//       ignoreExpiration: false,
//       secretOrKey: jwtConstants.secret
//     });
//   }

//   async validate(payload: any) {
//     return { id: payload.sub, firstName: payload.firstName, lastName: payload.lastName };
//   }
// }