import { useCallback, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import canvasSketch from 'canvas-sketch';
import random from 'canvas-sketch-util/random';
import { sketch } from './sketch.helper';

export const Sketch = ({ values }) => {
  const canvasRef = useRef();
  const managerRef = useRef();
  const [seed, setSeed] = useState(random.value());

  const start = useCallback(async () => {
    const manager = await canvasSketch(
      () => sketch(values, seed),
      {
        dimensions: [2048, 2048],
        canvas: canvasRef.current
      }
    );
    managerRef.current = manager;
    return manager;
  }, [canvasRef, values, seed])

  useEffect(() => {
    const start = async () => {
      const manager = await canvasSketch(
        () => sketch(values, seed),
        {
          dimensions: [2048, 2048],
          canvas: canvasRef.current
        }
      );
      managerRef.current = manager;
      return manager;
    };
    start()
  }, [canvasRef, values, seed, start]);

  return (
    <>
      <canvas ref={canvasRef} />
      <ButtonWrap>
        <button type="button" onClick={() => managerRef.current.exportFrame()}>Save</button>
        <button type="button" onClick={() => setSeed(random.value())}>Random</button>
      </ButtonWrap>
    </>
  );
}

const ButtonWrap = styled.div`
  display: flex;
  button {
    padding: 4px 8px;
    cursor: pointer;
    background-color: white;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    color: rebeccapurple;
    border: 3px solid rebeccapurple;
  }
`;