import { useReducer } from 'react';
import styled from 'styled-components';
import { Sketch } from './Sketch';

const allParams = {
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
}

const reducer = (state, action) => ({
  ...state,
  [action.type]: action.value
})

const initialState = Object.entries(allParams).reduce((acc, current) => {
  return {
    ...acc,
    [current[0]]: current[1].value
  }
}, {});

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Wrap>
      <Sketch values={state} />
      <Grid>
        {Object.entries(state).map(([key, value]) => (
          <ParamWrap key={key}>
            <label>{allParams[key].name}</label>
            <input
              value={value}
              onChange={({ target: { value } }) => dispatch({ type: key, value })}
            />
          </ParamWrap>
        ))}
      </Grid>
    </Wrap>
  );
}

const Wrap = styled.main`
  display: flex;
  flex-direction: column;
  margin: 20px;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const ParamWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  input {
    margin-left: 8px;
    font-size: 16px;
    width: 60px;
  }
`;