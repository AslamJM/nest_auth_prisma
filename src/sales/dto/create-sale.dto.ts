import { PaymentMethod } from "@prisma/client"

export class CreateSaleDto {
    customer_id: number
    user_id: number
    total_amount: number
    payment_method: PaymentMethod
    sale_details: {
        create: [
            {
                product_id: number,
                sale_goods_details: {
                    create: [
                        {
                            grn_detail_id: number
                            quantity: number
                            selling_price: number
                        }
                    ]
                }
            }
        ]
    }
}
