import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {} 
