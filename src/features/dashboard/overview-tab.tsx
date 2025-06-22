import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import CartIcon from "@/components/layout/cart-icon.tsx";
import {TrendingDown, TrendingUp} from "lucide-react";
import {Overview} from "@/features/dashboard/components/overview.tsx";
import {RecentSales} from "@/features/dashboard/components/recent-sales.tsx";

const stats = [
    {
        key: 'total-revenue',
        value: '₫45,231.89',
        percentageChange: 20.1,
    },
    {
        key: 'orders',
        value: '+2350',
        percentageChange: 180.1,
    },
    {
        key: 'customers',
        value: '+1500',
        percentageChange: 50.5,
    },
    {
        key: 'products',
        value: '+5000',
        percentageChange: -75.2,
    },
]

const overview = [
    {
        name: 'Jan',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Feb',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Mar',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Apr',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'May',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Jun',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Jul',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Aug',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Sep',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Oct',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Nov',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Dec',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
]

const recentSales = [
    {
        id: '1',
        avatar: '',
        customer: 'John Doe',
        email: 'johndoe@gmail.com',
        status: 'Pending',
        amount: 150000,
    },
    {
        id: '2',
        avatar: 'https://i.pravatar.cc/150?img=2',
        customer: 'Jane Smith',
        email: 'janesmith@gmail.com',
        status: 'Completed',
        amount: 200000,
    },
    {
        id: '3',
        avatar: 'https://i.pravatar.cc/150?img=3',
        customer: 'Alice Johnson',
        email: 'alicejohnson@gmail.com',
        status: 'Stuffing',
        amount: 300000,
    },
    {
        id: '4',
        avatar: 'https://i.pravatar.cc/150?img=4',
        customer: 'Bob Brown',
        email: 'bobbrown@gmail.com',
        status: 'Shipped',
        amount: 400000,
    },
    {
        id: '5',
        avatar: 'https://i.pravatar.cc/150?img=5',
        customer: 'Charlie White',
        email: 'charliewhite@gmail.com',
        status: 'Rejected',
        amount: 500000,
    }
];

const pendingOrder = 5;

export function OverviewTab() {
    return (
        <>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-4'>
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0'>
                            <CardTitle className='text-sm font-medium'>
                                {renderTitle(stat.key)}
                            </CardTitle>
                            <CartIcon className='text-muted-foreground h-4 w-4'>
                                {renderIcon(stat.key)}
                            </CartIcon>
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold'>{stat.value}</div>
                            <div className='flex items-center text-muted-foreground text-xs'>
                                {stat.percentageChange > 0 ? (
                                    <TrendingUp className="mr-1 h-3 w-3 text-trend-up"/>
                                ) : (
                                    <TrendingDown className="mr-1 h-3 w-3 text-trend-down"/>
                                )}
                                {stat.percentageChange > 0 ? "+" : ""}
                                {stat.percentageChange}% với tháng trước
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
                <Card className='col-span-1 lg:col-span-4'>
                    <CardHeader>
                        <CardTitle>Tổng quan</CardTitle>
                    </CardHeader>
                    <CardContent className='pl-2'>
                        <Overview overview={overview}/>
                    </CardContent>
                </Card>
                <Card className='col-span-1 lg:col-span-3'>
                    <CardHeader>
                        <CardTitle>Đơn hàng gần đây</CardTitle>
                        <CardDescription>
                            Bạn có {pendingOrder} đơn hàng mới hôm nay
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RecentSales recentSales={recentSales}/>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

function renderTitle(key: string) {
    switch (key.toLowerCase()) {
        case "total-revenue":
            return "Tổng doanh thu";
        case "orders":
            return "Đơn hàng";
        case "customers":
            return "Khách hàng";
        case "products":
            return "Sản phẩm";
        default:
            return key;
    }
}

function renderIcon(key: string) {
    switch (key.toLowerCase()) {
        case "total-revenue":
            return (
                <>
                    <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"/>
                    <path d="M18 12h.01"/>
                    <path d="M19 22v-6"/>
                    <path d="m22 19-3-3-3 3"/>
                    <path d="M6 12h.01"/>
                    <circle cx="12" cy="12" r="2"/>
                </>
            );
        case "orders":
            return (
                <>
                    <circle cx="8" cy="21" r="1"/>
                    <circle cx="19" cy="21" r="1"/>
                    <path
                        d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </>
            );
        case "customers":
            return (
                <>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <circle cx="9" cy="7" r="4"/>
                </>
            );
        case "products":
            return (
                <>
                    <path
                        d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/>
                    <path d="m7 16.5-4.74-2.85"/>
                    <path d="m7 16.5 5-3"/>
                    <path d="M7 16.5v5.17"/>
                    <path
                        d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/>
                    <path d="m17 16.5-5-3"/>
                    <path d="m17 16.5 4.74-2.85"/>
                    <path d="M17 16.5v5.17"/>
                    <path
                        d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/>
                    <path d="M12 8 7.26 5.15"/>
                    <path d="m12 8 4.74-2.85"/>
                    <path d="M12 13.5V8"/>
                </>
            );
        default:
            return null;
    }
}