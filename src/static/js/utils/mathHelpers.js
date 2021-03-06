/**
 * Format seconds to hours and minutes
 * @NOTE: Will always return at least minutes and seconds
 * @param {Number} time - The time to be formatted in seconds
 * @returns {string} - The formatted time like "1:05" or "2:34:59" or "255:05:59"
 */
export const formatSeconds = time => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  let formattedTime = '';

  if (hours > 0) {
    formattedTime += `${hours}:${minutes < 10 ? '0' : ''}`;
  }

  formattedTime += `0${minutes}:${seconds < 10 ? '0' : ''}`;
  formattedTime += `${seconds}`;

  // return min + ':' + ((sec<10) ? ('0' + sec) : sec);

  return formattedTime;
};

export const isArrayZeroedOut = arr => {
  return arr.every(val => val === 0);
};
