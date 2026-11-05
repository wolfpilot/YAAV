/**
 * Get the center angle for a band, mirrored onto the left or right semicircle by "side".
 */
export const getStereoBandAngle = (
  index: number,
  bandCount: number,
  side: number,
  topAngle: number
): number => topAngle + (side * (index + 0.5) * Math.PI) / bandCount
