import { response } from "~/utils/response"
import { Todo } from "./model"

// server/routes/todo/index.get.ts
export default defineEventHandler(async (event) => {
  const res = await $fetch<Todo[]>(`${process.env.NITRO_MOCK_API}/todos`)
  return response(200, 'success', res)
})
