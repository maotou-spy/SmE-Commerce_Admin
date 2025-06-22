import {DotsHorizontalIcon} from '@radix-ui/react-icons'
import {Row} from '@tanstack/react-table'
import {Button} from '@/components/ui/button.tsx'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx'
import {useOrders} from '../../features/orders/context/orders-context.tsx'
import {orderSchema} from '@/features/orders/types/schema.ts'
import {Edit, Trash2} from "lucide-react";

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
                    <DotsHorizontalIcon className='h-4 w-4'/>
                    <span className='sr-only'>Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-[160px]'>
                <DropdownMenuItem
                    onClick={() => {
                        setCurrentRow(task)
                        setOpen('update')
                    }}
                >
                    Edit
                    <DropdownMenuShortcut>
                        <Edit size={16}/>
                    </DropdownMenuShortcut>
                </DropdownMenuItem>
                {/*<DropdownMenuItem disabled>Favorite</DropdownMenuItem>*/}
                <DropdownMenuItem
                    onClick={() => {
                        setCurrentRow(task)
                        setOpen('delete')
                    }}
                >
                    Delete
                    <DropdownMenuShortcut>
                        <Trash2 size={16}/>
                    </DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
