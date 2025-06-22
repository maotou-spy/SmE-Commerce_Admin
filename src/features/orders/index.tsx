import AppHeader from '@/components/layout/app-header.tsx'
import {Main} from '@/components/layout/main.tsx'
import {OrdersPrimaryButtons} from './components/orders-primary-buttons.tsx'
import OrdersProvider from './context/orders-context.tsx'
import {OrdersDialogs} from './components/orders-dialogs.tsx'
import {sampleOrders} from "@/features/orders/types/orders.ts";
import {DataTable} from "@/components/column/data-table.tsx";
import {columns} from "@/features/orders/components/columns.tsx";

export default function Orders() {
    return (
        <OrdersProvider>
            <AppHeader/>

            <Main>
                <div className='mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4'>
                    <div className='space-y-1'>
                        <h2 className='text-2xl font-bold tracking-tight'>
                            Đơn hàng
                        </h2>
                        <p className='text-muted-foreground'>
                            Danh sách đơn hàng trong tháng này.
                        </p>
                    </div>
                    <OrdersPrimaryButtons/>
                </div>
                <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
                    <DataTable data={sampleOrders} columns={columns}/>
                </div>
            </Main>

            <OrdersDialogs/>
        </OrdersProvider>
    )
}
