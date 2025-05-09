import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { PusherService } from './pusher/pusher.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      load: [
        () => ({
          PORT: process.env.PORT || 8010,
          BACKEND_URL: process.env.BACKEND_URL || 'localhost',
          FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
        }),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [PusherService],
})
export class AppModule {}
