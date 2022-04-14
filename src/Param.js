import styled from 'styled-components';
import { initialValues } from './initialValues';

export function Param({ type, value, onChange }) {
  return (
    <ParamWrap inputWidth={initialValues[type].inputWidth}>
      {/* <button>▶▼</button> */}
      <label>{initialValues[type].name}</label>
      <input
        value={value}
        onChange={onChange}
      />
    </ParamWrap>
  )
}

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