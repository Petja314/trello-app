import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'

const PORT = 4200 | 4201

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api')
  // localhost:4200/
  app.use(cookieParser())
  app.enableCors({
    origin: ['http://localhost:3001'],
    credentials: true,
    exposedHeaders: 'set-cookie'
  })

  await app.listen(4200)
}

bootstrap()
