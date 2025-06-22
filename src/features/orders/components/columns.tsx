import {ColumnDef} from '@tanstack/react-table'
import {Checkbox} from '@/components/ui/checkbox'
import {Order} from '@/features/orders/types/schema'
import {DataTableColumnHeader} from '@/components/column/data-table-column-header.tsx'
import {Badge} from '@/components/ui/badge'
import {orderColumnTitles, orderStatuses} from "@/features/orders/types/data.tsx";

export const columns: ColumnDef<Order>[] = [
    {
        id: 'select',
        header: ({table}) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label='Chọn tất cả'
                className='translate-y-[2px]'
            />
        ),
        cell: ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label='Chọn'
                className='translate-y-[2px]'
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: 'orderCode',
        header: ({column}) => (
            <DataTableColumnHeader column={column}
                                   title={orderColumnTitles.find(x => x.id === column.id)?.title || column.id}/>
        ),
        cell: ({row}) => (
            <span className='font-medium text-sm text-primary'>
        {row.getValue('orderCode')}
      </span>
        ),
    },

    {
        accessorKey: 'userName',
        header: ({column}) => (
            <DataTableColumnHeader column={column}
                                   title={orderColumnTitles.find(x => x.id === column.id)?.title || column.id}/>
        ),
        cell: ({row}) => <span>{row.getValue('userName')}</span>,
    },

    {
        accessorKey: 'userPhone',
        header: ({column}) => (
            <DataTableColumnHeader column={column}
                                   title={orderColumnTitles.find(x => x.id === column.id)?.title || column.id}/>
        ),
        cell: ({row}) => <span>{row.getValue('userPhone')}</span>,
    },

    {
        accessorKey: 'userEmail',
        header: ({column}) => (
            <DataTableColumnHeader column={column}
                                   title={orderColumnTitles.find(x => x.id === column.id)?.title || column.id}/>
        ),
        cell: ({row}) => <span>{row.getValue('userEmail')}</span>,
    },

    {
        accessorKey: 'totalAmount',
        header: ({column}) => (
            <DataTableColumnHeader column={column}
                                   title={orderColumnTitles.find(x => x.id === column.id)?.title || column.id}/>
        ),
        cell: ({row}) => {
            const amount: number = row.getValue('totalAmount')
            return (
                <span>
                  {amount.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}
                </span>
            )
        },
    },

    {
        accessorKey: 'status',
        header: ({column}) => (
            <DataTableColumnHeader column={column}
                                   title={orderColumnTitles.find(x => x.id === column.id)?.title || column.id}/>
        ),
        cell: ({row}) => {
            const status: string = orderStatuses.find(
                (s) => s.value === row.getValue('status')
            )?.label || row.getValue('status')
            return (
                <Badge variant='outline' className='capitalize'>
                    {status}
                </Badge>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },

    // createdAt, modifiedAt columns
    {
        accessorKey: 'createdAt',
        header: ({column}) => (
            <DataTableColumnHeader column={column}
                                   title={orderColumnTitles.find(x => x.id === column.id)?.title || column.id}/>
        ),
        cell: ({row}) => {
            const dateStr: string = row.getValue('createdAt')
            const date = dateStr ? new Date(dateStr) : null
            return (
                <span>
      {date ? date.toLocaleDateString('vi-VN', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
      }) : ''}
    </span>
            )
        },
    },
    {
        accessorKey: 'modifiedAt',
        header: ({column}) => (
            <DataTableColumnHeader column={column}
                                   title={orderColumnTitles.find(x => x.id === column.id)?.title || column.id}/>
        ),
        cell: ({row}) => {
            const dateStr: string = row.getValue('modifiedAt')
            const date = dateStr ? new Date(dateStr) : null
            return (
                <span>
                  {date ? date.toLocaleDateString('vi-VN', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                  }) : ''}
                </span>
            )
        },
        filterFn: (row, columnId, filterValue) => {
            const normalizeDate = (date: Date) => {
                date.setHours(0, 0, 0, 0);
                return date;
            };

            const dateStr = row.getValue(columnId);
            if (!dateStr || !filterValue) return false;
            const rowDate = normalizeDate(new Date(dateStr as string));
            const filterDate = normalizeDate(new Date(filterValue as string));
            return rowDate >= filterDate;
        }

    },

    // {
    //     id: 'actions',
    //     cell: ({row}) => <DataTableRowActions row={row}/>,
    // },
]