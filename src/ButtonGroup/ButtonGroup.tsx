import { css } from '@emotion/react';

export type DirectionType = 'row' | 'column';
interface ButtonGroupProps {
  /** 버튼 그룹에서 보여줄 버튼들 */
  children: React.ReactNode;
  /** 버튼을 보여줄 방향 */
  direction?: DirectionType;
  /** 버튼을 우측에 보여줍니다. */
  rightAlign?: boolean;
  /** 버튼과 버튼사이의 간격을 설정합니다. */
  gap?: number | string;
  /** 스타일 커스터마이징 하고싶을 때 사용 */
  className?: string;
}

function ButtonGroup({
  children,
  direction = 'row',
  rightAlign = false,
  gap,
  className,
}: ButtonGroupProps) {
  return (
    <div className={className} css={block(direction, rightAlign, gap)}>
      {children}
    </div>
  );
}

const gapStyle = (direction: DirectionType, gap?: number | string) => {
  if (!direction || !gap) return null;
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    'button + button': {
      [marginType]: gap,
    },
  });
};

const block = (
  direction: DirectionType,
  rightAlign?: boolean,
  gap?: number | string,
) =>
  css`
    display: flex;
    flex-direction: ${direction};
    ${gapStyle(direction, gap)}
    ${rightAlign &&
    css`
      justify-content: flex-end;
    `}
  `;

export default ButtonGroup;
