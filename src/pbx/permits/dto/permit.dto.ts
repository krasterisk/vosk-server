import {IsNumber, IsString} from "class-validator";

export class PermitDto {
    @IsString({message: 'Must be a string'})
    readonly name: string
    @IsString({message: 'Must be a string'})
    readonly exten: string
    @IsNumber({},{message: "Must be integer"})
    readonly vpb_user_id: number
}