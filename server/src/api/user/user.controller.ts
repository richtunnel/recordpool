// server/src/api/user/user.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signup(@Body() userData) {
    return await this.userService.signup(userData);
  }

  @Post('login')
  async login(@Body() loginData) {
    return await this.userService.login(loginData);
  }
}
