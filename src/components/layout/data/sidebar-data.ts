import {
    BarChart3,
    BellIcon,
    BellPlus,
    Boxes,
    LayoutDashboard,
    Plus,
    Settings,
    ShoppingCart,
    TrendingUp,
    Users,
} from 'lucide-react'
import {type SidebarData} from '../types'

export const sidebarData: SidebarData = {
    user: {
        name: 'Maotou',
        email: 'maotou.finn@gmail.com',
        avatar: '/avatars/shadcn.jpg',
    },
    NavUser: [
        {
            title: 'Hồ sơ',
            // url: '/profile',
            icon: Users,
        },
        {
            title: 'Cài đặt',
            // url: '/settings',
            icon: Settings,
        },
    ],
    sidebarHeader: {
        title: 'Thảo mộc dưỡng sinh',
        logo: {
            light: 'logo.svg',
            dark: 'logo_dark.svg',
        },
    },
    navGroups: [
        {
            title: 'Lối tắt',
            items: [
                {
                    title: 'Thêm sản phẩm',
                    // url: '/products/new',
                    icon: Plus,
                },
                {
                    title: 'Tạo đơn hàng',
                    // url: '/orders/new',
                    icon: ShoppingCart,
                },
                {
                    title: 'Gửi thông báo',
                    // url: '/notifications/new',
                    icon: BellPlus,
                },
            ],
        },
        {
            title: 'Danh mục',
            items: [
                {
                    title: 'Dashboard',
                    url: '/',
                    icon: LayoutDashboard,
                },
                {
                    title: 'Đơn hàng',
                    url: '/orders',
                    icon: ShoppingCart,
                    badge: '5',
                    // items: [
                    //     // {title: "All Orders", url: "/orders",},
                    //     // {title: "Pending Orders", url: "/orders/pending", badge: "5",},
                    //     // {title: "Completed Orders", url: "/orders/completed",},
                    //     // {title: "Returns", url: "/orders/returns", badge: "2",},
                    //     // {title: "Payments", url: "/orders/payments",},
                    // ],
                },
                {
                    title: 'Sản phẩm',
                    // url: '/products',
                    icon: Boxes,
                    items: [
                        // {title: "All Products", url: "/products"},
                        // {title: "Inventory", url: "/products/inventory"},
                        // {title: "Categories", url: "/products/categories"},
                        // {title: "Best Sellers", url: "/products/best-sellers"},
                    ],
                },
                {
                    title: 'Khách hàng',
                    // url: "/customers",
                    icon: Users,
                },
                {
                    title: 'Marketing',
                    // url: "/marketing",
                    icon: BarChart3,
                },
                {
                    title: 'Báo cáo',
                    // url: "/reports",
                    icon: TrendingUp,
                },
                {
                    title: 'Thông báo',
                    // url: "/reports",
                    icon: BellIcon,
                },
                {
                    title: 'Cài đặt',
                    // url: "/settings",
                    icon: Settings,
                    items: [
                        // {title: "General", url: "/settings"},
                        // {title: "Notifications", url: "/settings/notifications"},
                        // {title: "Store Settings", url: "/settings/store"},
                    ],
                },
            ],
        },
    ],
}
