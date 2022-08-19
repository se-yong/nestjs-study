import { IsNotEmpty, IsString } from "class-validator";

export class CreateBoardDto {
    @IsNotEmpty()
    title: string;

    @IsString()
    description: string;
}