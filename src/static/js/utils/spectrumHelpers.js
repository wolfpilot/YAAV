export const getLogarithmicBands = (
  frequencyData,
  sampleRate,
  fftSize,
  bandCount,
  minFrequency,
  maxFrequency
) => {
  const bands = new Uint8Array(bandCount);
  const binWidth = sampleRate / fftSize;
  const upperFrequency = Math.min(maxFrequency, sampleRate / 2);
  const frequencyRatio = upperFrequency / minFrequency;

  for (let i = 0; i < bandCount; i++) {
    const lower = minFrequency * frequencyRatio ** (i / bandCount);
    const upper = minFrequency * frequencyRatio ** ((i + 1) / bandCount);
    const firstBin = Math.max(1, Math.ceil(lower / binWidth));
    const endBin = Math.min(frequencyData.length, Math.ceil(upper / binWidth));

    // Narrow low-frequency bands can fall between FFT bins. Use the nearest bin.
    if (firstBin >= endBin) {
      const nearestBin = Math.min(
        frequencyData.length - 1,
        Math.max(1, Math.round(Math.sqrt(lower * upper) / binWidth))
      );
      bands[i] = frequencyData[nearestBin];
      continue;
    }

    for (let bin = firstBin; bin < endBin; bin++) {
      bands[i] = Math.max(bands[i], frequencyData[bin]);
    }
  }

  return bands;
};

export const getStereoBandAngle = (index, bandCount, side, topAngle) =>
  topAngle + side * (index + 0.5) * Math.PI / bandCount;
