// Defaults
export const config = {
  accent: {
    color: "#5a2bae",
  },
  ring: {
    radius: 150,
    lineWidth: 3,
    colors: ["#2f10c3", "#8810c3"],
    hueShiftDegrees: 15,
    // Canvas angles grow clockwise, with 0 pointing right and π/2 pointing down
    arcs: {
      full: { start: 0, end: Math.PI * 2 },
      left: { start: Math.PI / 2, end: Math.PI * 1.5 },
      right: { start: -Math.PI / 2, end: Math.PI / 2 },
    },
  },
  track: {
    colors: ["#2f10c3", "#8810c3"],
    hueShiftDegrees: 30,
  },
}
