import { css } from '@emotion/react';
import palette from '../lib/styles/palette';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  fontSize?: string;
  padding?: string;
  background?: string;
  outline?: boolean;
  outlineColor?: string;
  borderColor?: string;
  ref?: React.MutableRefObject<HTMLInputElement | null>;
}

function Input({
  fontSize = '',
  padding = '',
  background = palette.white,
  outline = true,
  outlineColor = palette.indigo['5'],
  borderColor = palette.gray['5'],
  ref,
  ...rest
}: InputProps) {
  const htmlProps = rest as InputProps;
  return (
    <input
      css={block(
        fontSize,
        padding,
        background,
        outline,
        outlineColor,
        borderColor,
      )}
      ref={ref}
      {...htmlProps}
    />
  );
}

const block = (
  fontSize: string,
  padding: string,
  background: string,
  outline: boolean,
  outlineColor: string,
  borderColor: string,
) => css`
  flex: 1;
  font-size: ${fontSize ? fontSize : '1rem'};
  padding: ${padding ? padding : '0.5rem 0.75rem'};
  background: ${background};
  border-radius: 4px;

  &::placeholder {
    color: ${palette.gray['5']};
  }

  ${outline &&
  css`
    outline: none;
    border: 1px solid ${borderColor};
    &:focus {
      box-shadow: 0 0 0 1px ${outlineColor};
    }
  `}

  ${!outline &&
  css`
    border: none;
  `}
`;

export default Input;
