import { css } from '@emotion/react';

import {
  buttonColorMap,
  ButtonColorType,
  buttonSizeMap,
  ButtonSizeType,
  outlineButtonStyle,
} from '../lib/styles/button';
import palette from '../lib/styles/palette';

export type ButtonShapeType = 'rect' | 'round';
interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  /** 버튼내부 내용 */
  children: React.ReactNode;
  /** button 컬러 */
  color?: ButtonColorType;
  /** button 사이즈 */
  size?: ButtonSizeType;
  /** button 모양 */
  shape?: ButtonShapeType;
  /** button 색상 채우기 여부 */
  outline?: boolean;
}

function Button({
  children,
  color = 'gray',
  size = 'medium',
  shape = 'rect',
  outline = false,
  ...rest
}: ButtonProps) {
  const htmlProps = rest as any;
  return (
    <button
      css={block(color, size, shape, outline)}
      onClick={(e) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        (e.target as HTMLButtonElement).blur();
      }}
      {...htmlProps}
    >
      {children}
    </button>
  );
}

const block = (
  color: ButtonColorType,
  size: ButtonSizeType,
  shape: ButtonShapeType,
  outline: boolean,
) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid ${buttonColorMap[color].background};

  ${outline &&
  css`
    color: ${buttonColorMap[color].background};
    background: ${outlineButtonStyle.background};
    &:hover {
      color: ${buttonColorMap[color].hoverBackground};
      border: 1px solid ${buttonColorMap[color].hoverBackground};
      opacity: ${outlineButtonStyle.opacity};
    }
  `}
  ${!outline &&
  css`
    color: ${palette.white};
    background: ${buttonColorMap[color].background};
    &:hover {
      background: ${buttonColorMap[color].hoverBackground};
      border: 1px solid ${buttonColorMap[color].hoverBackground};
    }
  `}
  

  &:disabled {
    cursor: not-allowed;
    border: 1px solid ${palette.gray[1]};
    color: ${palette.gray[5]};
    ${outline &&
    css`
      background: ${outlineButtonStyle.background};
      &:hover {
        background: ${outlineButtonStyle.background};
      }
    `}
    ${!outline &&
    css`
      background: ${palette.gray[3]};
      &:hover {
        background: ${palette.gray[3]};
      }
    `}
  }

  ${shape === 'round' &&
  css`
    border-radius: 2rem;
  `}

  ${size === 'responsive' &&
  css`
    flex: 1;
    width: 100%;
    min-height: 2.5rem;
    max-height: 2.5rem;
    font-size: 1.125rem;
  `};

  ${size !== 'responsive' &&
  css`
    height: ${buttonSizeMap[size].height};
    padding: ${buttonSizeMap[size].padding};
    font-size: ${buttonSizeMap[size].fontSize};
  `};
`;

export default Button;
