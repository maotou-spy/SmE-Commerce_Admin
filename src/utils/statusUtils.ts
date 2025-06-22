export function statusUtils(status: string): {
    label: string;
    color: string;
} {
    switch (status) {
        case 'Pending':
            return {label: 'Chờ xác', color: 'bg-yellow-500'};
        case 'Completed':
            return {label: 'Hoàn thành', color: 'bg-green-500'};
        case 'processing':
            return {label: 'Đang xử lý', color: 'bg-blue-500'};
        default:
            return {label: 'Khác', color: 'bg-gray-500'};
    }
}