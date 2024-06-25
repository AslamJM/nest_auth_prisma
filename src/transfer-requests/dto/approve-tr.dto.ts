export class ApproveTransferRequestDto {
    details: Array<{
        transfer_request_details_id: number
        grn_detail_id: number
        returned_quantity: number
        accepted_quantity: number
    }>
}