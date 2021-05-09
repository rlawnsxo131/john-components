import palette from './palette';

type ButtonSizeMapType = 'small' | 'medium' | 'large';
export type ButtonSizeType = 'small' | 'medium' | 'large' | 'responsive';
export const buttonSizeMap: {
  [key in ButtonSizeMapType]: {
    height: string;
    padding: string;
    fontSize: string;
  };
} = {
  small: {
    height: '1.5rem',
    padding: '0 0.9375rem',
    fontSize: '0.75rem',
  },
  medium: {
    height: '2rem',
    padding: '0 1.25rem',
    fontSize: '1rem',
  },
  large: {
    height: '2.5rem',
    padding: '0 1.125rem',
    fontSize: '1.125rem',
  },
};

// gray, red, pink, grape, violet, indigo, blue, cyan, teal, green, lime, yellow, orange
export type ButtonColorType =
  | 'gray'
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange';
export const buttonColorMap: {
  [key in ButtonColorType]: {
    background: string;
    hoverBackground: string;
  };
} = {
  gray: {
    background: palette.gray[7],
    hoverBackground: palette.gray[6],
  },
  red: {
    background: palette.red[7],
    hoverBackground: palette.red[5],
  },
  pink: {
    background: palette.pink[6],
    hoverBackground: palette.pink[4],
  },
  grape: {
    background: palette.grape[6],
    hoverBackground: palette.grape[4],
  },
  violet: {
    background: palette.violet[6],
    hoverBackground: palette.violet[4],
  },
  indigo: {
    background: palette.indigo[6],
    hoverBackground: palette.indigo[4],
  },
  blue: {
    background: palette.blue[7],
    hoverBackground: palette.blue[5],
  },
  cyan: {
    background: palette.cyan[8],
    hoverBackground: palette.cyan[6],
  },
  teal: {
    background: palette.teal[6],
    hoverBackground: palette.teal[5],
  },
  green: {
    background: palette.green[6],
    hoverBackground: palette.green[5],
  },
  lime: {
    background: palette.lime[6],
    hoverBackground: palette.lime[5],
  },
  yellow: {
    background: palette.yellow[6],
    hoverBackground: palette.yellow[5],
  },
  orange: {
    background: palette.orange[6],
    hoverBackground: palette.orange[5],
  },
};

export const outlineButtonStyle = {
  background: 'rgba(255, 255, 255, 0.5)',
  opacity: '0.7',
};
