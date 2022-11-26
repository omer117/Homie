import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AssetModule } from '../asset/asset.module';
import Joi = require('Joi')
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AssetModule,
  ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: Joi.object({
      MONGODB_URI: Joi.string().required()
    }),
    envFilePath: '../../.env'
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
