import { isAxiosError } from 'axios'

export const getErrorMessage = (error: Error | null) => {
  if (!error) {
    return 'An unknown error occurred'
  }
  let message = `Something went wrong: ${error.message}`

  if (isAxiosError(error)) {
    const errorData = error.response?.data as any
    message += `. ${errorData?.message || ''}, traceId: ${errorData?.traceId || ''}`
  }

  return message
}
