import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BinanceModule } from './binance/binance.module';

@Module({
  imports: [PrismaModule, BinanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
