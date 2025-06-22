import {z} from 'zod'

export const returnResponseSchema = z.object({
    statusCode: z.string(),
    data: z.any().nullable(), // Use z.any() to allow any type of data
    pageNumber: z.number(),
    pageSize: z.number(),
    totalRecord: z.number(),
    validationErrors: z.record(z.array(z.string()).nullable()).nullable(),
    isSuccess: z.boolean(),
    internalErrorMessage: z.unknown().nullable()
})

export type ReturnResponse = z.infer<typeof returnResponseSchema>