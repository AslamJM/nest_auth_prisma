export class CreateSaleReturnDto {
    details: [
        {
            sale_good_details_id: number,
            return_quantity: number
        }
    ]
}