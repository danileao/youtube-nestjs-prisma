import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { PrismaService } from '../../database/PrismaService';

@Module({
  controllers: [BookController],
  providers: [BookService, PrismaService],
})
export class BookModule {}
