// Utils
import { linear } from "./easings"
import type { EaseOptions } from "./types"

/**
 * Ease from one value to another in a specified time
 * Calls the provided callback with each eased value.
 */
export const ease = (options: EaseOptions): Promise<void> => {
  const { from, to, duration, callback, ease = linear } = options

  let startTime: number | undefined

  const dx = to - from

  return new Promise<void>((resolve) => {
    const _tick = (time: number) => {
      // In a RAF loop, the initial timestamp will never be 0.
      // To be more accurate, this should be set to the value returned by the first iteration.
      if (startTime === undefined) {
        startTime = time
      }

      const dt = time - startTime
      const p = dt / duration

      if (p >= 1) {
        if (!callback) {
          return
        }

        callback(to)
        resolve()

        return
      }

      callback?.(from + dx * ease(p))

      requestAnimationFrame(_tick)
    }

    requestAnimationFrame(_tick)
  })
}
