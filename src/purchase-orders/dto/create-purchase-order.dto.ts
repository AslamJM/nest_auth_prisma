import { PurchaseOrderStatus } from "@prisma/client"
import { IsDateString, IsEnum } from "class-validator"

export class CreatePurchaseOrderDto {
    @IsDateString()
    order_date: string

    @IsEnum(PurchaseOrderStatus)
    order_status: PurchaseOrderStatus

    details: Array<{
        product_id: number
        quantity: number
    }>
}
