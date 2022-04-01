import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-dto';
import { updateTaskStatusDto } from './dto/update-task-status.dto';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
        
        @Get()
        getAlltasks(@Query() filterDto : GetTasksFilterDto): Task[] {
           //if any filters defined, call tasksService.getTasksWithFilters
           //otherwise, just get all tasks
           if(Object.keys(filterDto).length){
            return this.tasksService.getTasksWithFilterDto(filterDto);
           } else{ 
               return this.tasksService.getAllTasks();
        }
    }

        @Get('/:id')
        getTaskById(@Param('id') id: string ): Task {
            return this.tasksService.getTaskById(id);
        }
        
        @Post()
        createTask(@Body() createTaskDto :CreateTaskDto ): Task {
            return this.tasksService.createTasks(createTaskDto);
        }

        @Delete('/:id')
        deleteTask(@Param('id') id:string): void {
            return this.tasksService.deleteTask(id);
        }

        @Patch('/:id/status')
        updateTaskStatus(@Param('id') id:string, @Body() updateTaskStatusDto: updateTaskStatusDto) : Task{
            const { status } = updateTaskStatusDto;
            return this.tasksService.updateTaskStatus(id, status);
        }
    
}
