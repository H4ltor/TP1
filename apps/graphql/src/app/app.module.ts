import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRootAsync({ useFactory: () => ({  uri: 'mongodb://localhost/TP1' }) }),
    //MongooseModule.forRoot('mongodb://localhost/TP1'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
