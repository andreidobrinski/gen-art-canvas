import { useReducer } from 'react';
import styled from 'styled-components';
import { Sketch } from './Sketch';

const initialState = {
  gridCount: 40,
  filterPercent: 20,
  colorCount: 5,
  symbol: '.',
  rotationMultiplier: 1,
  radiusMultiplier: 0.25,
  radiusXMultiplier: 1,
  radiusYMultiplier: 1,
  rotationXMultiplier: 1,
  rotationYMultiplier: 1,
}

const reducer = (state, action) => ({
  ...state,
  [action.type]: action.value
})

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Wrap>
      <Sketch values={state} />
      <Grid>
        {Object.keys(initialState).map(type => (
          <ParamWrap key={type}>
            <label>{type}</label>
            <input
              value={state[type]}
              onChange={({ target: { value } }) => dispatch({ type, value })}
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