import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { ValidationPipe} from '@nestjs/common'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    methods : ['POST','GET'],
    credentials:true,
  })

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );
  

  const port= process.env.PORT
  await app.listen(port);

  console.log(`my app is listenning on port :${port}`)

}
bootstrap();
