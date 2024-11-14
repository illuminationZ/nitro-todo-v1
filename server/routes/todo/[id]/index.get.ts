import { errorHandler } from "~/utils/error"
import { response } from "~/utils/response"

// server/routes/todo/index.get.ts
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const data = await $fetch(`${process.env.NITRO_MOCK_API}/todos/${id}`, {
    onResponseError: (error) => {
      return errorHandler(error.response.status, 'data found', null)
    }
  })

  return response(200, 'success', data)
})
