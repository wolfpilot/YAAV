export const getStereoBandAngle = (index, bandCount, side, topAngle) =>
  topAngle + (side * (index + 0.5) * Math.PI) / bandCount;
