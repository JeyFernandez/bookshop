import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateLibroDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsNumber()
    @IsNotEmpty()
    price:number;

    @IsNumber()
    @IsNotEmpty()
    stock:number;

    @IsString({each:true})
    @IsArray()
    @IsOptional()
    iamges?:string[];
}
