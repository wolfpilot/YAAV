// Utils
import { ease } from "./animationHelpers"
import { easeInOutCubic } from "./easings"
import type { EaseOptions } from "./types"

export const fadeIn = async (audio: HTMLAudioElement): Promise<void> => {
  const options: EaseOptions = {
    from: 0,
    to: 1,
    duration: 100,
    ease: easeInOutCubic,
    callback: (vol) => (audio.volume = vol),
  }

  await ease(options)

  return new Promise<void>((resolve) => resolve())
}

export const fadeOut = async (audio: HTMLAudioElement): Promise<void> => {
  const options: EaseOptions = {
    from: 1,
    to: 0,
    duration: 100,
    ease: easeInOutCubic,
    callback: (vol) => (audio.volume = vol),
  }

  await ease(options)

  return new Promise<void>((resolve) => resolve())
}
