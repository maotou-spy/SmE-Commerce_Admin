import {Button} from '@/components/ui/button.tsx'
import {useOrders} from '../context/orders-context.tsx'

export function OrdersPrimaryButtons() {
    const {setOpen} = useOrders()
    return (
        <div className='flex gap-2'>
            <Button
                variant='outline'
                className='space-x-1'
                onClick={() => setOpen('import')}
            >
                {/*<span>Import</span> <IconDownload size={18}/>*/}
            </Button>
            <Button className='space-x-1' onClick={() => setOpen('create')}>
                {/*<span>Create</span> <IconPlus size={18}/>*/}
            </Button>
        </div>
    )
}
