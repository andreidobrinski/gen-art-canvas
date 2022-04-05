import { useReducer } from 'react';
import styled from 'styled-components';
import { Sketch } from './Sketch';

const allParams = {
  gridCount: {
    name: 'Grid Count',
    description: '',
    value: 40,
  },
  filterPercent: {
    name: 'Filter Percent',
    description: '',
    value: 20,
  },
  colorCount: {
    name: 'Colour Count',
    description: '',
    value: 5,
  },
  symbol: {
    name: 'Symbol',
    description: '',
    value: '.',
  },
  rotationMultiplier: {
    name: 'Rotation Multiplier',
    description: '',
    value: 1,
  },
  radiusMultiplier: {
    name: 'Radius Multiplier',
    description: '',
    value: 0.25,
  },
  radiusXMultiplier: {
    name: 'Radius X Multiplier',
    description: '',
    value: 1,
  },
  radiusYMultiplier: {
    name: 'Radius Y Multiplier',
    description: '',
    value: 1,
  },
  rotationXMultiplier: {
    name: 'Rotation X Multiplier',
    description: '',
    value: 1,
  },
  rotationYMultiplier: {
    name: 'Rotation Y Multiplier',
    description: '',
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