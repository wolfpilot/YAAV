/**
 * Get the center angle for a band, mirrored onto the left or right semicircle by "side".
 */
export const getStereoBandAngle = (index, bandCount, side, topAngle) =>
  topAngle + (side * (index + 0.5) * Math.PI) / bandCount
