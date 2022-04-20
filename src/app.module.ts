import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
