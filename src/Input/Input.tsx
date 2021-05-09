import { css } from '@emotion/react';
import palette from '../lib/styles/palette';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  padding?: string | number;
  background?: string;
  outline?: boolean;
  ref?: React.MutableRefObject<HTMLInputElement | null>;
}

function Input({
  padding = '1rem',
  background = palette.white,
  outline = true,
  ref,
  ...rest
}: InputProps) {
  const htmlProps = rest as InputProps;
  return (
    <input css={block(padding, background, outline)} ref={ref} {...htmlProps} />
  );
}

const block = (
  padding: string | number,
  background: string,
  outline: boolean,
) => css``;

export default Input;
