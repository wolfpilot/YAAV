// Defaults
export const config = {
  accent: {
    color: "#07a6c2",
  },
  ring: {
    radius: 150,
    lineWidth: 3,
    colors: ["#10c3b1", "#107cc3"],
    hueShiftDegrees: 15,
    // Canvas angles grow clockwise, with 0 pointing right and π/2 pointing down
    arcs: {
      full: { start: 0, end: Math.PI * 2 },
      left: { start: Math.PI / 2, end: Math.PI * 1.5 },
      right: { start: -Math.PI / 2, end: Math.PI / 2 },
    },
  },
  track: {
    colors: ["#10c3b1", "#107cc3"],
    hueShiftDegrees: 30,
  },
}
