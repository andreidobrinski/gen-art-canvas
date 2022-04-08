import { useReducer } from 'react';
import styled from 'styled-components';
import { Sketch } from './Sketch';
import { initialValues } from './initialValues';

const reducer = (state, action) => ({
  ...state,
  [action.type]: action.value
})

const initialState = Object.entries(initialValues).reduce((acc, current) => {
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
            <label>{initialValues[key].name}</label>
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