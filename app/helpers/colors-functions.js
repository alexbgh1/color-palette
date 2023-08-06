import { GAP_STEP } from "../constants/selectColor";

const hexToRgb = (hex = "#ffffff") => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hexColor = hex.replace(
    shorthandRegex,
    (m, r, g, b) => r + r + g + g + b + b
  );

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : {
        r: 255,
        g: 255,
        b: 255,
      };
};

const rgbToHex = (r = 255, g = 255, b = 255) => {
  const rgb = b | (g << 8) | (r << 16);
  return "#" + (0x1000000 + rgb).toString(16).slice(1);
};

const getLuminance = (r = 255, g = 255, b = 255) => {
  // Luminance is the average of the maximum and minimum color intensities
  const y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return y;
};

// Considering a Gray Scale, {r: y, g: y, b: y}
const contrastColor = (color = "#ffffff", ratio = 20) => {
  const { r, g, b } = hexToRgb(color);
  const y = getLuminance(r, g, b);

  let y2;
  if (y < 64) y2 = 255;
  if (y >= 64 && y < 128) y2 = 192;
  if (y >= 128 && y < 192) y2 = 64;
  if (y >= 192) y2 = 0;

  return rgbToHex(y2, y2, y2);
};

const colorInterpolation = (
  color1 = { r: 0, g: 0, b: 0 },
  color2 = { r: 255, g: 255, b: 255 },
  factor = 0.5
) => {
  // color1 and color2 are objects with r, g, b properties
  // factor is a number between 0 and 1
  const result = {
    r: Math.round(color1.r + factor * (color2.r - color1.r)),
    g: Math.round(color1.g + factor * (color2.g - color1.g)),
    b: Math.round(color1.b + factor * (color2.b - color1.b)),
  };

  return rgbToHex(result.r, result.g, result.b);
};

const colorLinearInterpolation = ({ colors, step = 3 }) => {
  /*
  colors:
    {colors: ["#7c8794", "#4a5360", "#141821"],
    step: 3}
 
  Steps is the number of colors to generate between each color
  colors[0] to colors[1] and colors[1] to colors[2]
  */

  step = Number(step) + GAP_STEP;

  const colorArrayRgb = colors.map((color) => hexToRgb(color)); // [ {r: 12, g: 13, b: 14}, {r,g,b}, {r,g,b} ]
  const colorArrayHex = [];
  for (let i = 0; i < colorArrayRgb.length - 1; i++) {
    // step * 2 + 1
    for (let j = 0; j < step; j++) {
      colorArrayHex.push(
        colorInterpolation(colorArrayRgb[i], colorArrayRgb[i + 1], j / step)
      );
    }
  }
  colorArrayHex.push(colors[colors.length - 1]);

  return colorArrayHex;
};

export {
  hexToRgb,
  rgbToHex,
  getLuminance,
  contrastColor,
  colorLinearInterpolation,
};
