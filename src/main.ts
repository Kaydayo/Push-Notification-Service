import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';


console.log(process.env.KAFKA_BOOTSTRAP_SERVER,"ababa")
async function bootstrap() {
 const app = await NestFactory.create(AppModule);
  app.listen(8060)
}
bootstrap();
