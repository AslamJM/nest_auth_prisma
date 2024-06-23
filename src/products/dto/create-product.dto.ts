import { IsInt, IsString, IsUrl } from "class-validator";

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
    created_by_id: number

    @IsInt()
    updated_by_id: number
}
