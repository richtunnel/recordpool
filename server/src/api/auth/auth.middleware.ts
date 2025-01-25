import * as session from 'express-session';
import * as passport from 'passport';
import { Injectable } from '@nestjs/common';
import { RedisService } from '../../config/redis.service';

@Injectable()
export class AuthMiddleware {
  constructor(private readonly redisService: RedisService) {}

  configure(app) {
    app.use(
      session({
        store: this.redisService.getRedisSessionStore(),
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: false,
      }),
    );
    app.use(passport.initialize());
    app.use(passport.session());
  }
}
