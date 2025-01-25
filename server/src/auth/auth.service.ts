// // server/src/auth/auth.service.ts

// import { Injectable } from '@nestjs/common';
// import { UserService } from '../users/user.service';  // Assuming you have a UserService

// @Injectable()
// export class AuthService {
//   constructor(
//     private readonly userService: UserService,  // Assuming you have a UserService
//   ) {}

//   async validateUser(username: string, password: string): Promise<any> {
//     const user = await this.userService.findByUsername(username);
//     if (user && user.password === password) {  // Use bcrypt for secure password comparison
//       const { password, ...result } = user;
//       return result;
//     }
//     return null;
//   }
// }
