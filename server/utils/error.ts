// utils/error.ts

export const errorHandler = (status: number, msg: string, data: any) => {
    throw createError({
        status: status,
        statusMessage: msg,
        data: data
    })
}