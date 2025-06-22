import {Row} from '@tanstack/react-table'
import {Button} from '@/components/ui/button.tsx'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx'
import {useOrders} from '@/features/orders/context/orders-context.tsx'
import {orderSchema} from '@/features/orders/types/schema.ts'
import {Edit, Eye, MoreHorizontal, Package, Trash2} from "lucide-react";

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

export function DataTableRowActions<TData>({
                                               row,
                                           }: DataTableRowActionsProps<TData>) {
    const task = orderSchema.parse(row.original)

    const {setOpen, setCurrentRow} = useOrders()

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='ghost'
                    className='data-[state=open]:bg-muted flex h-8 w-8 p-0'
                >
                    <MoreHorizontal className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-[180px]'>
                <DropdownMenuItem
                    onClick={() => {
                        setCurrentRow(task)
                        setOpen('update')
                    }}
                >
                    <Eye className="mr-2 h-4 w-4"/>
                    Xem chi tiết
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4"/>
                    Chỉnh sửa
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Package className="mr-2 h-4 w-4"/>
                    Cập nhật trạng thái
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                    <Trash2 className="mr-2 h-4 w-4"/>
                    Hủy đơn hàng
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
