export const withMinimumDelay = <T>(fn: () => Promise<T>, minMs: number = 3000) => {
  return async () => {
    const start = Date.now()
    const result = await fn()

    const elapsed = Date.now() - start

    if (elapsed < minMs) {
      await new Promise(res => setTimeout(res, minMs - elapsed))
    }

    return result
  }
}
