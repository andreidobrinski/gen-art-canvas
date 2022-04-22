import { useState } from 'react';
import styled from 'styled-components';
import { initialValues } from './initialValues';

export function Param({ type, value, onChange }) {
  const [isShowingDescription, setShowingDescription] = useState(false);

  return (
    <ParamWrap inputWidth={initialValues[type].inputWidth}>
      <div>
        <button
          onClick={() => setShowingDescription(!isShowingDescription)}
          type="button"
        >
          {isShowingDescription ? '▼' : '▶'}
        </button>
        <label>{initialValues[type].name}</label>
        <input
          value={value}
          onChange={onChange}
        />
      </div>
      {isShowingDescription && <p>{initialValues[type].description}</p>}
    </ParamWrap>
  )
}

const ParamWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  width: fit-content;
  input {
    font-size: 16px;
    width: ${({ inputWidth }) => inputWidth};
    border: 2px solid #03396c;
    padding: 6px 8px;
    border-radius: 6px;
  }
  label {
    padding: 4px;
  }
  button {
    border: none;
    background: none;
  }
  div {
    display: flex;
    align-items: center;
  }
`;