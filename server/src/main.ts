import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as session from 'express-session';
import { redisClient } from './redis/redis.client';
import * as connectRedis from 'connect-redis';

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ContentTypeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse();
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    return next.handle(); // Proceed with the next handler
  }
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setViewEngine('hbs');

  const RedisStore = connectRedis(session);

  app.use(
    session({
      store: new RedisStore({ client: redisClient }), // Use Redis for session storage
      secret: 'your_session_secret', // Change this to a strong secret
      resave: false, // Avoid re-saving sessions
      saveUninitialized: false, // Don't save uninitialized sessions
      cookie: {
        httpOnly: true, // Prevent JavaScript access to cookies
        secure: false, // Set to true if using HTTPS
        maxAge: 3600000, // 1 hour
      },
    }),
  );



  await app.listen(4000);
}

bootstrap();
