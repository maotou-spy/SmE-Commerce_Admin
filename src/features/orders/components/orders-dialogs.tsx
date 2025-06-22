import {showSubmittedData} from '@/utils/show-submitted-data.tsx'
import {ConfirmDialog} from '@/components/confirm-dialog.tsx'
import {useOrders} from '../context/orders-context.tsx'
import {OrdersImportDialog} from './orders-import-dialog.tsx'

// import {TasksMutateDrawer} from './tasks-mutate-drawer'

export function OrdersDialogs() {
    const {open, setOpen, currentRow, setCurrentRow} = useOrders()
    return (
        <>
            {/*<TasksMutateDrawer*/}
            {/*    key='task-create'*/}
            {/*    open={open === 'create'}*/}
            {/*    onOpenChange={() => setOpen('create')}*/}
            {/*/>*/}

            <OrdersImportDialog
                key='orders-import'
                open={open === 'import'}
                onOpenChange={() => setOpen('import')}
            />

            {currentRow && (
                <>
                    {/*<TasksMutateDrawer*/}
                    {/*    key={`task-update-${currentRow.orderId}`}*/}
                    {/*    open={open === 'update'}*/}
                    {/*    onOpenChange={() => {*/}
                    {/*        setOpen('update')*/}
                    {/*        setTimeout(() => {*/}
                    {/*            setCurrentRow(null)*/}
                    {/*        }, 500)*/}
                    {/*    }}*/}
                    {/*    currentRow={currentRow}*/}
                    {/*/>*/}

                    <ConfirmDialog
                        key='task-delete'
                        destructive
                        open={open === 'delete'}
                        onOpenChange={() => {
                            setOpen('delete')
                            setTimeout(() => {
                                setCurrentRow(null)
                            }, 500)
                        }}
                        handleConfirm={() => {
                            setOpen(null)
                            setTimeout(() => {
                                setCurrentRow(null)
                            }, 500)
                            showSubmittedData(
                                currentRow,
                                'The following task has been deleted:'
                            )
                        }}
                        className='max-w-md'
                        title={`Delete this order: ${currentRow.orderCode} ?`}
                        desc={
                            <>
                                You are about to delete a task with the ID{' '}
                                <strong>{currentRow.orderId}</strong>. <br/>
                                This action cannot be undone.
                            </>
                        }
                        confirmText='Delete'
                    />
                </>
            )}
        </>
    )
}
