// // server/src/auth/auth.module.ts

// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { LocalStrategy } from './local.strategy';
// import { UsersModule } from '../users/users.module';  // Assuming you have a Users module that manages users

// @Module({
//   imports: [UsersModule],  // Import the Users module to interact with the database
//   providers: [AuthService, LocalStrategy],  // Add AuthService and LocalStrategy as providers
//   exports: [AuthService],  // Export the AuthService to make it available in other parts of the app
// })
// export class AuthModule {}
