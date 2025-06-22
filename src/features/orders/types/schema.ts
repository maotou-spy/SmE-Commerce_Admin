import {z} from 'zod'

export const orderSchema = z.object({
    orderId: z.string(),
    orderCode: z.string(),
    userId: z.string(),
    userName: z.string(),
    userEmail: z.string().email(),
    userPhone: z.string(),
    totalAmount: z.number(),
    status: z.string(),
    createdAt: z.string().nullable(),
    modifiedAt: z.string().nullable(),
})

export type Order = z.infer<typeof orderSchema>