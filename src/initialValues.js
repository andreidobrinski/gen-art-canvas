export const initialValues = {
  gridCount: {
    name: 'Grid Count',
    description: 'The number of rows and columns in the grid',
    value: 40,
  },
  filterPercent: {
    name: 'Filter Percent',
    description: 'The percent of symbols to randomly filter out (0-100)',
    value: 20,
  },
  colorCount: {
    name: 'Colour Count',
    description: 'The number of colours to use from the palette (0-5)',
    value: 5,
  },
  symbol: {
    name: 'Symbol',
    description: 'The Unicode symbol used in each cell. Try a |, =, or an emoji',
    value: '.',
  },
  rotationMultiplier: {
    name: 'Rotation Multiplier',
    description: 'Total rotation multiplier for each cell',
    value: 1,
  },
  radiusMultiplier: {
    name: 'Radius Multiplier',
    description: 'Total radius multiplier for each cell. Think of this as the size.',
    value: 0.25,
  },
  radiusXMultiplier: {
    name: 'Radius Noise X Multiplier',
    description: 'Multiplies against the X value in the noise generator for radius',
    value: 1,
  },
  radiusYMultiplier: {
    name: 'Radius Noise Y Multiplier',
    description: 'Multiplies against the Y value in the noise generator for radius',
    value: 1,
  },
  rotationXMultiplier: {
    name: 'Rotation X Multiplier',
    description: 'Multiplies against the X value in the noise generator for rotation',
    value: 1,
  },
  rotationYMultiplier: {
    name: 'Rotation Y Multiplier',
    description: 'Multiplies against the Y value in the noise generator for rotation',
    value: 1,
  },
  bgColour: {
    name: 'Background Colour',
    description: 'Use any CSS colour',
    value: 'transparent',
  },
};