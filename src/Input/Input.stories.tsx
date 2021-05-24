import { css } from '@emotion/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import palette from '../lib/styles/palette';
import Input from './Input';

export default {
  title: 'components|Input/Input',
  component: Input,
  decorators: [withKnobs],
  parameters: {
    docs: {
      // page: inputGroupMdx,
    },
  },
};

export const props = () => {
  const fontSize = text('fontSize', '1rem');
  const padding = text('padding', '0.5rem 0.75rem');
  const background = text('background', palette.white);
  const outline = boolean('outline', true);
  const outlineColor = text('outlintColor', palette.indigo['5']);
  const borderColor = text('borderColor', palette.gray['5']);
  const placeholder = text('placeholder', 'placeholder');
  const className = text('className', 'className');

  return (
    <div css={inputWrapper(className)}>
      <Input
        fontSize={fontSize}
        padding={padding}
        background={background}
        outline={outline}
        outlineColor={outlineColor}
        borderColor={borderColor}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};
const inputWrapper = (className: string) => css`
  .${className} {
    width: 100%;
  }
`;
props.story = {
  name: 'Props',
};
