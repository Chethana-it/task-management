import { TaskStatus } from "../tasks.model";
import { IsEnum, isEnum } from "class-validator";

export class updateTaskStatusDto {
    @IsEnum(TaskStatus)
    status: TaskStatus;
}