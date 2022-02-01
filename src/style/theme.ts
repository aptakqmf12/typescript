const calcRem = (size: number) => `${size / 16}rem`;

const fontSize = {
  xs: calcRem(12),
  m: calcRem(16),
  l: calcRem(20),
  xl: calcRem(24),
};

const Margin = {
  xs: calcRem(8),
  m: calcRem(12),
  l: calcRem(16),
  xl: calcRem(20),
};

const Padding = {
  xs: calcRem(8),
  m: calcRem(12),
  l: calcRem(16),
  xl: calcRem(20),
};

const GrayScale = {
  l1: "#D3D3D3",
  l2: "#A9A9A9",
  l3: "#696969",
  l4: "#778899",
  l5: "#2F4F4F",
};

const MainColor = {
  green: "#a8dcd9",
  snow: "#fdf7fa",
  kobi: "#e2a3c7",
  purple: "#d67ab1",
  violet: "#60435f",
};

const theme = { fontSize, Margin, Padding, GrayScale, MainColor };
export default theme;
