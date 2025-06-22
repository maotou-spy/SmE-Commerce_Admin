import {Bar, BarChart, ResponsiveContainer, XAxis, YAxis} from 'recharts'
import {OverviewType} from "@/features/dashboard/types";
import {formatCurrency} from "@/utils";

export function Overview({overview}: { overview: OverviewType[] }) {
    return (
        <ResponsiveContainer width='100%' height={350}>
            <BarChart data={overview}>
                <XAxis
                    dataKey='name'
                    stroke='#888888'
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke='#888888'
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${formatCurrency(value)}`}
                />
                <Bar
                    dataKey='total'
                    fill='currentColor'
                    radius={[4, 4, 0, 0]}
                    className='fill-primary'
                />
            </BarChart>
        </ResponsiveContainer>
    )
}
