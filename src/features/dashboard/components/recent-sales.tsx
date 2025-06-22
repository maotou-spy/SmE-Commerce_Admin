import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {RecentSalesType} from "@/features/dashboard/types";
import {formatCurrencyK} from "@/utils";

export function RecentSales({recentSales}: { recentSales: RecentSalesType[] }) {
    return (
        <div className="space-y-8">
            {recentSales.map((sale) => (
                <div key={sale.id} className="flex items-center gap-4">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src={sale.avatar} alt={sale.customer}/>
                        <AvatarFallback>{getInitials(sale.customer)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-1 flex-wrap items-center justify-between">
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">{sale.customer}</p>
                            <p className="text-sm text-muted-foreground">{sale.email}</p>
                        </div>
                        <div className="space-y-1">
                            {sale.status}
                        </div>
                        <div className="font-medium">{formatCurrencyK(sale.amount)}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

// Hàm lấy chữ cái đầu của tên
function getInitials(name: string): string {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
}
