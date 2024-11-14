// utils/response.ts

export const response = (status: number, msg: string, data: any) => {
  return {
    status,
    msg,
    data
  }
}