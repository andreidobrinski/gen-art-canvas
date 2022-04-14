import { useReducer } from 'react';
import styled from 'styled-components';
import GithubCorner from 'react-github-corner';
import { Sketch } from './Sketch';
import { initialValues } from './initialValues';
import { Param } from './Param';

const reducer = (state, action) => {
  const newState = {
    ...state,
    [action.type]: action.value,
  };

  const limitStateUpdate = (type, value, limit) => {
    if (value > limit) {
      return {
        ...newState,
        [type]: limit,
      };
    }
    return {
      ...newState,
      [type]: value,
    }
  }

  switch (action.type) {
    case 'gridCount':
      return limitStateUpdate(action.type, action.value, 99);
    case 'colorCount':
      return limitStateUpdate(action.type, action.value, 5);
    case 'filterPercent':
      return limitStateUpdate(action.type, action.value, 100);
    default:
      return newState;
  };
};

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
          <Param
            key={key}
            type={key}
            value={value}
            onChange={({ target: { value } }) => dispatch({ type: key, value }) }
          />
        ))}
      </Grid>
      <GithubCorner
        href="https://github.com/andreidobrinski/gen-art-canvas"
        bannerColor="#03396c"
      />
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-left: 20px;
`;
