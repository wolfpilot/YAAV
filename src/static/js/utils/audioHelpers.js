// Utils
import { ease } from "./animationHelpers";
import { easeInOutCubic } from "./easings";

export const fadeIn = async(audio) => {
  const options = {
    from: 0,
    to: 1,
    duration: 100,
    ease: easeInOutCubic,
    callback: vol => audio.volume = vol
  };

  await ease(options);

  return new Promise(resolve => resolve());
};

export const fadeOut = async(audio) => {
  const options = {
    from: 1,
    to: 0,
    duration: 100,
    ease: easeInOutCubic,
    callback: vol => audio.volume = vol
  };

  await ease(options);

  return new Promise(resolve => resolve());
};
