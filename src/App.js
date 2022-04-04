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
    <div style={{ margin: '20px' }}>
      <Sketch values={state} />
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        {Object.keys(initialState).map(type => (
          <div style={{ dispay: 'flex' }} key={type}>
            <label>{type}</label>
            <input
              value={state[type]}
              onChange={({ target: { value } }) => dispatch({ type, value })}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
