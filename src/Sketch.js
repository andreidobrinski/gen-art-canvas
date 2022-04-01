import { useCallback, useRef, useEffect, useState } from 'react';
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
      <button type="button" onClick={() => managerRef.current.exportFrame()}>save</button>
      <button type="button" onClick={() => setSeed(random.value())}>random</button>
    </>
  );
}