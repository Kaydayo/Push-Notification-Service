import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface';
import { AppService } from './app.service';
import { MessageDTO } from './dto/message.dto';

@Controller('notification')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async testSendNotification(@Body() payload:MessageDTO): Promise<any>{
    try {
      return await this.appService.sendFirebaseMessages([payload])
    } catch (error) {
      return {error: error.message, message: "an error occurred"}
    }
  }

}
