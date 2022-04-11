export const initialValues = {
  gridCount: {
    name: 'Grid Count',
    description: 'The number of rows and columns in the grid',
    value: 40,
    inputWidth: '30px',
  },
  filterPercent: {
    name: 'Filter Percent',
    description: 'The percent of symbols to randomly filter out (0-100)',
    value: 20,
    inputWidth: '30px',
  },
  colorCount: {
    name: 'Colour Count',
    description: 'The number of colours to use from the palette (0-5)',
    value: 5,
    inputWidth: '20px',
  },
  symbol: {
    name: 'Symbol',
    description: 'The Unicode symbol used in each cell. Try a |, =, or an emoji',
    value: '.',
    inputWidth: '20px',
  },
  rotationMultiplier: {
    name: 'Rotation Multiplier',
    description: 'Total rotation multiplier for each cell',
    value: 1,
    inputWidth: '40px',
  },
  radiusMultiplier: {
    name: 'Radius Multiplier',
    description: 'Total radius multiplier for each cell. Think of this as the size.',
    value: 0.25,
    inputWidth: '40px',
  },
  radiusXMultiplier: {
    name: 'Radius Noise X Multiplier',
    description: 'Multiplies against the X value in the noise generator for radius',
    value: 1,
    inputWidth: '40px',
  },
  radiusYMultiplier: {
    name: 'Radius Noise Y Multiplier',
    description: 'Multiplies against the Y value in the noise generator for radius',
    value: 1,
    inputWidth: '40px',
  },
  rotationXMultiplier: {
    name: 'Rotation X Multiplier',
    description: 'Multiplies against the X value in the noise generator for rotation',
    value: 1,
    inputWidth: '40px',
  },
  rotationYMultiplier: {
    name: 'Rotation Y Multiplier',
    description: 'Multiplies against the Y value in the noise generator for rotation',
    value: 1,
    inputWidth: '40px',
  },
  // bgColour: {
  //   name: 'Background Colour',
  //   description: 'Use any CSS colour',
  //   value: 'transparent',
  //   inputWidth: '100px',
  // },
};