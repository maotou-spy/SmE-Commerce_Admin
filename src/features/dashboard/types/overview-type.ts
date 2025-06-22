export interface StatsType {
    key: string;
    value: string | number;
    percentageChange: number;
    // icon: string; // Using key to reference icons instead of storing them directly
}

export interface OverviewType {
    name: string;
    total: number;
}

export interface RecentSalesType {
    id: string;
    avatar: string;
    customer: string;
    email: string;
    status: string;
    amount: number;
}

export interface OverviewTabProps {
    stats: StatsType[];
    overview: OverviewType[];
    recentSales: RecentSalesType[];
}