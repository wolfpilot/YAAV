// Defaults
export const config = {
  accent: {
    color: "blue",
  },
  ring: {
    radius: 150,
    lineWidth: 3,
    colors: ["blue", "purple"],
    hueShiftDegrees: 15,
    // Canvas angles grow clockwise, with 0 pointing right and π/2 pointing down
    arcs: {
      full: { start: 0, end: Math.PI * 2 },
      left: { start: Math.PI / 2, end: Math.PI * 1.5 },
      right: { start: -Math.PI / 2, end: Math.PI / 2 },
    },
  },
  track: {
    colors: ["blue", "purple"],
    hueShiftDegrees: 30,
  },
}
