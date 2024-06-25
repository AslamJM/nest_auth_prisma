import { TransferRequestStatus } from "@prisma/client"

export class CreateTransferRequestDto {
    from_store_id: number
    to_store_id: number
    request_date: string
    transfer_status: TransferRequestStatus

    transfer_request_details: {
        create: Array<{
            product_id: number
            requested_quantity: number
        }>
    }
}
