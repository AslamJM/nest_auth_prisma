import { IsDateString, IsInt } from "class-validator";

export class CreateGoodRecieveNoteDto {
    @IsDateString()
    recieved_date: string;

    @IsInt()
    purchase_order_id: number;

    details: Array<{
        product_id: number
        store_id: number
        batch_number: string
        quantity: number
        sample_quantity: number
        buying_price: number
        selling_price: number
        expiry_date: string
    }>

}
