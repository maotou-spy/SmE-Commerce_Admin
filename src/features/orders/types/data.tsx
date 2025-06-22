import {AlertCircle, CheckCircle, Clock, Package, Truck} from "lucide-react";

export const orderStatuses = [
    {
        value: 'Pending',
        label: 'Chờ xác nhận'
    },
    {
        value: 'Stuffing',
        label: 'Đang chuẩn bị'
    },
    {
        value: 'Shipped',
        label: 'Đang vận chuyển'
    },
    {
        value: 'Completed',
        label: 'Đã hoàn thành'
    },
    {
        value: 'Cancelled',
        label: 'Đã hủy'
    },
    {
        value: 'Rejected',
        label: 'Đã từ chối'
    },
]

export const orderColumnTitles = [
    {
        "id": "orderCode",
        "title": "Mã đơn hàng"
    },
    {
        "id": "userName",
        "title": "Khách hàng"
    },
    {
        "id": "userPhone",
        "title": "SĐT"
    },
    {
        "id": "userEmail",
        "title": "Email"
    },
    {
        "id": "totalAmount",
        "title": "Tổng tiền"
    },
    {
        "id": "status",
        "title": "Trạng thái"
    },
    {
        "id": "createdAt",
        "title": "Ngày tạo"
    },
    {
        "id": "modifiedAt",
        "title": "Cập nhật lần cuối"
    }
]

export const getStatusIcon = (status: string) => {
    switch (status) {
        case "Pending":
            return <Clock className="h-4 w-4"/>
        case "Stuffing":
            return <Package className="h-4 w-4"/>
        case "Shipped":
            return <Truck className="h-4 w-4"/>
        case "Completed":
            return <CheckCircle className="h-4 w-4"/>
        case "Cancelled":
            return <AlertCircle className="h-4 w-4"/>
        case "Rejected":
            return <AlertCircle className="h-4 w-4"/>
        default:
            return <Clock className="h-4 w-4"/>
    }
}

export const getStatusVariant = (status: string): string => {
    switch (status) {
        case 'Pending':
        case 'Stuffing':
            return 'cardForeground'
        case 'Shipped':
        case 'Completed':
            return 'primary'
        case 'Cancelled':
        case 'Rejected':
            return 'destructive'
        default:
            return 'muted'
    }
}
