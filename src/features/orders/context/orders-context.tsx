import React, {useState} from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import {Order} from "@/features/orders/types/schema.ts";

type OrdersDialogType = 'create' | 'update' | 'delete' | 'import'

interface OrdersContextType {
    open: OrdersDialogType | null
    setOpen: (str: OrdersDialogType | null) => void
    currentRow: Order | null
    setCurrentRow: React.Dispatch<React.SetStateAction<Order | null>>
}

const OrdersContext = React.createContext<OrdersContextType | null>(null)

interface Props {
    children: React.ReactNode
}

export default function OrdersProvider({children}: Props) {
    const [open, setOpen] = useDialogState<OrdersDialogType>(null)
    const [currentRow, setCurrentRow] = useState<Order | null>(null)
    return (
        <OrdersContext value={{open, setOpen, currentRow, setCurrentRow}}>
            {children}
        </OrdersContext>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useOrders = () => {
    const ordersContext = React.useContext(OrdersContext)

    if (!ordersContext) {
        throw new Error('useOrders has to be used within <OrdersContext>')
    }

    return ordersContext
}
