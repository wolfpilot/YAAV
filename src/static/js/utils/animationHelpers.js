// Utils
import { linear} from "./easings";

/**
 * Ease from one value to another in a specified time
 * @param {Number} options.from - The starting value
 * @param {Number} options.to - The end value
 * @param {Number} options.duration - Total duration of animation in ms
 * @param {Function} options.callback - Function to be executed at the end of the animation
 * @param {Function} options.ease - Custom easing function
 */
export const ease = options => {
  const { from, to, duration, callback, ease = linear } = options;

  let startTime;

  const dx = to - from;

  return new Promise(resolve => {
    const _tick = time => {
      // In a RAF loop, the initial timestamp will never be 0.
      // To be more accurate, this should be set to the value returned by the first iteration.
      if (!startTime) {
        startTime = time;
      }

      const dt = time - startTime;
      const p = dt / duration;

      if (p >= 1) {
        if (!callback) { return; }

        callback(to);
        resolve();

        return;
      }

      callback(from + dx * ease(p));

      requestAnimationFrame(_tick);
    };

    requestAnimationFrame(_tick);
  });
};
