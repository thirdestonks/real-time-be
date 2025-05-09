import { Body, Controller, Get, Post } from '@nestjs/common';
import { PusherService } from './pusher/pusher.service';

@Controller("api") //here
export class AppController {
  constructor(private pusherService: PusherService) {
    //
  }

  @Post("messages")
  async messages(
    @Body('username') username: string,
    @Body('message') message: string,
  ) {
    await this.pusherService.trigger("chat", "message", {
      username,
      message,
    });

    return {
      status: "success",
      message: "Message sent",
      data: {
        username,
        message,
      },
    }
  }
}
