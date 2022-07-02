type Rgb = {
  r: number;
  g: number;
  b: number;
};

// convert hex to rgb
export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

// convert rgb to string
export function rgbToHex(rgb: Rgb) {
  const pad = (rgb.r << 16) | (rgb.g << 8) | (rgb.b << 0);
  return "#" + (0x1000000 + pad).toString(16).slice(1);
}

export function parseRgb(rgb: string) {
  const parsed = rgb.replace("rgb(", "").replace(")", "").split(",");
  return {
    r: parseInt(parsed[0]),
    g: parseInt(parsed[1]),
    b: parseInt(parsed[2]),
  };
}

export function convertToRgb(color: string): Rgb | null {
  if (!color) return null;
  if (color.startsWith("#")) {
    return hexToRgb(color);
  } else if (color.startsWith("rgb")) {
    return parseRgb(color);
  } else {
    return null;
  }
}

export function generateShadesFromRgb(rgb: Rgb | null) {
  if (!rgb) return null;
  const { r, g, b } = rgb;
  const shades = [];
  for (let i = 0; i < 10; i++) {
    const newR = Math.round(r * (1 - i / 10));
    const newG = Math.round(g * (1 - i / 10));
    const newB = Math.round(b * (1 - i / 10));
    shades.push(
      rgbToHex({
        r: newR,
        g: newG,
        b: newB,
      })
    );
  }
  return shades.reverse();
}

export function generateTintsFromRgb(rgb: Rgb | null) {
  if (!rgb) return null;
  const { r, g, b } = rgb;
  const tints = [];
  for (let i = 0; i < 10; i++) {
    const newR = r + ((255 - r) * i) / 10;
    const newG = g + ((255 - g) * i) / 10;
    const newB = b + ((255 - b) * i) / 10;

    tints.push(
      rgbToHex({
        r: newR,
        g: newG,
        b: newB,
      })
    );
  }
  return tints;
}
