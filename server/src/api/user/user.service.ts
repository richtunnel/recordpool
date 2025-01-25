// server/src/api/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../db/models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userRepository: typeof User
  ) {}

  async signup(userData) {
    // Handle user creation
    return this.userRepository.create(userData);
  }

  async login(loginData) {
    // Handle login logic using Passport
  }
}
