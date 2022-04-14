import { useReducer } from 'react';
import styled from 'styled-components';
import GithubCorner from 'react-github-corner';
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
          <ParamWrap key={key} inputWidth={initialValues[key].inputWidth}>
            {/* <button>▶▼</button> */}
            <label>{initialValues[key].name}</label>
            <input
              value={value}
              onChange={({ target: { value } }) => dispatch({ type: key, value })}
            />
          </ParamWrap>
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

const ParamWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  width: fit-content;
  /* border-bottom: 2px solid #03396c; */
  input {
    /* transform: translate(6px, 4px); */
    font-size: 16px;
    width: ${({ inputWidth }) => inputWidth};
    border: 2px solid #03396c;
    padding: 6px 8px;
    border-radius: 6px;
  }
  label {
    /* margin-bottom: -8px; */
    padding: 4px;
  }
  button {
    margin-bottom: -6px;
    border: none;
    background: none;
  }
`;