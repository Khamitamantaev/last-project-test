import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BinanceModule } from './binance/binance.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [PrismaModule, BinanceModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
