import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import canvasSketch from 'canvas-sketch';
import random from 'canvas-sketch-util/random';
import palettes from 'nice-color-palettes';
import { sketch } from './sketch.helper';

function pickRandomPalette() {
  const paletteIndex = Math.floor(Math.random() * 100 + 1);

  return palettes[paletteIndex];
};

export const Sketch = ({ values }) => {
  const canvasRef = useRef();
  const managerRef = useRef();
  const [seed, setSeed] = useState(random.value());
  const [palette, setPalette] = useState(pickRandomPalette());

  useEffect(() => {
    const start = async () => {
      const manager = await canvasSketch(
        () => sketch({ values, seed, palette }),
        {
          dimensions: [2048, 2048],
          canvas: canvasRef.current
        }
      );
      managerRef.current = manager;
      return manager;
    };
    start()
  }, [canvasRef, values, seed, palette]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <canvas ref={canvasRef} />
      <ButtonWrap>
        <button type="button" onClick={() => setSeed(random.value())}>🔀 Pattern</button>
        <button type="button" onClick={() => setPalette(pickRandomPalette())}>🔀 Colours</button>
        <button type="button" onClick={() => managerRef.current.exportFrame()}>💾 Save</button>
      </ButtonWrap>
    </div>
  );
}

const ButtonWrap = styled.div`
  display: flex;
  margin-left: 20px;
  gap: 8px;
  @media (min-width: 1000px) {
    justify-content: flex-end;
    margin-right: 20px;
    margin-top: 10px;
  }
  button {
    padding: 4px 8px;
    cursor: pointer;
    background-color: white;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    color: #03396c;
    border: 2px solid #03396c;
  }
`;