// VND
export function formatCurrency(value: number): string {
    return Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
    }).format(value);
}

// K VND
export function formatCurrencyK(value: number): string {
    return `${(value / 1000).toLocaleString('vi-VN')}K ₫`;
}
