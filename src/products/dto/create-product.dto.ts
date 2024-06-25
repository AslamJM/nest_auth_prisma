import { IsInt, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateProductDto {
    @IsString()
    product_name: string;

    @IsString()
    product_number: string;


    description: string;

    @IsUrl()
    image: string;

    @IsInt()
    category_id: number

    @IsInt()
    brand_id: number

    @IsInt()
    @IsOptional()
    created_by_id: number

    @IsInt()
    @IsOptional()
    updated_by_id: number
}
