import { lerp } from 'canvas-sketch-util/math';
import random from 'canvas-sketch-util/random';

export const sketch = ({ values, seed, palette }) => {
  const {
    gridCount,
    filterPercent,
    colorCount,
    symbol,
    rotationMultiplier,
    radiusMultiplier,
    radiusXMultiplier,
    radiusYMultiplier,
    rotationXMultiplier,
    rotationYMultiplier,
    bgColour,
  } = values;
  const shuffledPalette = random.shuffle(palette);
  const colours = shuffledPalette.slice(0, colorCount);

  const createGrid = () => {
    const points = [];

    for (let x = 0; x < gridCount; x++) {
      for (let y = 0; y < gridCount; y++) {
        const u = gridCount <= 1 ? 0.5 : x / (gridCount - 1);
        const v = gridCount <= 1 ? 0.5 : y / (gridCount - 1);
        const radius = Math.abs(random.noise2D(u * radiusXMultiplier, v * radiusYMultiplier)) * radiusMultiplier;

        points.push({
          color: random.pick(colours),
          radius,
          rotation: random.noise2D(u * rotationXMultiplier, v * rotationYMultiplier) * rotationMultiplier,
          position: [u, v]
        });
      }
    }

    return points;
  };

  random.setSeed(seed)
  const points = createGrid()
    .filter(() => random.value() > (filterPercent / 100))
  const margin = 100;

  return ({ context, width, height }) => {
    context.fillStyle = bgColour;
    context.fillRect(0, 0, width, height);

    points.forEach((data) => {
      const {
        position,
        radius,
        color,
        rotation
      } = data;

      const [u, v] = position;

      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);
      // const x = width * u;
      // const y = height * v;

      context.save();
      context.fillStyle = color;
      context.font = `${radius * width}px "sans-serif"`;
      context.translate(x, y);
      context.rotate(rotation);
      context.fillText(symbol, 0, 0);
      context.restore();
    });
  };
};