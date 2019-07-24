const baseFontSize = 16;

// Convert px to rem/em, and round to 3 decimal places (at most)
export const rem = (px = baseFontSize) => {
  // Return '0' if argument is less than 1 but greater or equal to 0
  if (px < 1 && px >= 0) {
    return '0';
  }

  // Raw converted value
  const rawResult = parseInt(px, 10) / baseFontSize;

  // Round to 3 decimal places at most
  const result = Math.round(rawResult * 1000) / 1000;

  return `${result}rem`;
};
