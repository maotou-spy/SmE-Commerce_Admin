import {useEffect, useState} from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import AppHeader from '@/components/layout/app-header.tsx'
import ComingSoon from '@/components/coming-soon'
import {Main} from '@/components/layout/main'
import {OverviewTab} from '@/features/dashboard/overview-tab.tsx'

export default function Dashboard() {
    const [selectedTab, setSelectedTab] = useState('overview')

    useEffect(() => {
        const current = subtabs.find((tab) => tab.value === selectedTab)
        document.title = `Dashboard | ${current?.label || 'Admin Panel'}`
    }, [selectedTab])

    return (
        <>
            {/*/!* ===== Heading ===== *!/*/}
            <AppHeader/>

            {/* ===== Main ===== */}
            <Main>
                <div className='mb-2 flex items-center justify-between space-y-2'></div>
                <Tabs
                    orientation='vertical'
                    defaultValue='overview'
                    className='space-y-4'
                    value={selectedTab}
                    onValueChange={setSelectedTab}
                >
                    <div className='w-full overflow-x-auto pb-2'>
                        <TabsList>
                            {subtabs.map((tab) => (
                                <TabsTrigger
                                    key={tab.value}
                                    value={tab.value}
                                    disabled={tab.disabled}
                                >
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {/* ===== Overview ===== */}
                    <TabsContent value='overview' className='space-y-4'>
                        <OverviewTab/>
                    </TabsContent>

                    {/* ===== Sales ===== */}
                    <TabsContent value='sales'>
                        {/*<div className='text-sm text-muted-foreground'>Sales types will be displayed here.</div>*/}
                        <ComingSoon/>
                    </TabsContent>

                    {/* ===== Products ===== */}
                    <TabsContent value='products'>
                        {/*<div className='text-sm text-muted-foreground'>Product types will be displayed here.</div>*/}
                        <ComingSoon/>
                    </TabsContent>

                    {/* ===== Customers ===== */}
                    <TabsContent value='customers'>
                        {/*<div className='text-sm text-muted-foreground'>Customer types will be displayed here.</div>*/}
                        <ComingSoon/>
                    </TabsContent>

                    {/* ===== Traffic ===== */}
                    <TabsContent value='traffics'>
                        {/*<div className='text-sm text-muted-foreground'>Traffic types will be displayed here.</div>*/}
                        <ComingSoon/>
                    </TabsContent>
                </Tabs>
            </Main>
        </>
    )
}

const subtabs = [
    {value: 'overview', label: 'Tổng quan', disabled: false},
    {value: 'sales', label: 'Doanh thu', disabled: false},
    {value: 'products', label: 'Sản phẩm', disabled: false},
    {value: 'customers', label: 'Khách hàng', disabled: false},
    {value: 'traffics', label: 'Lưu lượng', disabled: false},
]
