import { css } from '@emotion/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import {
  buttonColors,
  buttonShapes,
  buttonSizes,
} from '../lib/mocks/buttonMock';
import Button from './Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import buttonMdx from './Button.mdx';

export default {
  title: 'components|Button/Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    // componentSubtitle: 'button',
    docs: {
      page: buttonMdx,
    },
  },
};

export const props = () => {
  const children = text('children', 'click');
  const color = select('color', buttonColors, 'violet');
  const size = select('size', buttonSizes, 'medium');
  const shape = select('shape', buttonShapes, 'rect');
  const outline = boolean('outline', false);
  const disabled = boolean('disabled', false);
  return (
    <Button
      color={color}
      size={size}
      shape={shape}
      onClick={action('onClick')}
      outline={outline}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
props.story = {
  name: 'Props',
};

export const shape = () => {
  const color = select('color', buttonColors, 'violet');
  return (
    <ButtonGroup gap="0.5rem">
      <Button color={color}>rect</Button>
      <Button color={color} shape="round">
        round
      </Button>
      <Button color={color} outline>
        rect
      </Button>
      <Button color={color} shape="round" outline>
        round
      </Button>
    </ButtonGroup>
  );
};
shape.story = {
  name: 'Shape',
};

export const state = () => {
  const color = select('color', buttonColors, 'violet');
  return (
    <div css={stateBlock}>
      <ButtonGroup gap="0.5rem" className="state-button-group">
        <Button color={color}>active</Button>
        <Button color={color} disabled>
          disabled
        </Button>
        <Button color={color} outline>
          active
        </Button>
        <Button color={color} outline disabled>
          disabled
        </Button>
      </ButtonGroup>
      <ButtonGroup gap="0.5rem" className="state-button-group">
        <Button color={color} shape="round">
          active
        </Button>
        <Button color={color} shape="round" disabled>
          disabled
        </Button>
        <Button color={color} shape="round" outline>
          active
        </Button>
        <Button color={color} shape="round" outline disabled>
          disabled
        </Button>
      </ButtonGroup>
    </div>
  );
};
const stateBlock = css`
  display: flex;
  flex-direction: column;
  .state-button-group {
    &:nth-of-type(2) {
      margin-top: 0.5rem;
    }
  }
`;
state.story = {
  name: 'State',
};

export const size = () => {
  const color = select('color', buttonColors, 'violet');
  return (
    <div css={sizeBlock}>
      <ButtonGroup gap="0.5rem" className="size-button-group">
        {buttonSizes.map((v) => (
          <Button key={`size_${v}`} size={v} color={color}>
            {v}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup gap="0.5rem" className="size-button-group">
        {buttonSizes.map((v) => (
          <Button key={`size_${v}_round`} size={v} color={color} shape="round">
            {v}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup gap="0.5rem" className="size-button-group">
        {buttonSizes.map((v) => (
          <Button key={`size_${v}_outline`} size={v} color={color} outline>
            {v}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup gap="0.5rem" className="size-button-group">
        {buttonSizes.map((v) => (
          <Button
            key={`size_${v}_round_outline`}
            size={v}
            color={color}
            shape="round"
            outline
          >
            {v}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
const sizeBlock = css`
  .size-button-group {
    margin-top: 0.5rem;
  }
`;
size.story = {
  name: 'Size',
};

export const preview = () => {
  return (
    <div css={previewWrapper}>
      {buttonColors.map((color) => (
        <div css={previewWrapper} key={`colors_${color}`}>
          <h3>{color}</h3>
          <ButtonGroup gap="0.5rem" className="preview-button-group">
            {buttonSizes.map((size) => (
              <Button key={`${color}_${size}`} color={color} size={size}>
                {size}
              </Button>
            ))}
          </ButtonGroup>
          <ButtonGroup gap="0.5rem" className="preview-button-group">
            {buttonSizes.map((size) => (
              <Button
                key={`${color}_${size}`}
                color={color}
                size={size}
                outline
              >
                {size}
              </Button>
            ))}
          </ButtonGroup>
          <ButtonGroup gap="0.5rem" className="preview-button-group">
            {buttonSizes.map((size) => (
              <Button
                key={`${color}_${size}`}
                color={color}
                size={size}
                shape="round"
              >
                {size}
              </Button>
            ))}
          </ButtonGroup>
          <ButtonGroup gap="0.5rem" className="preview-button-group">
            {buttonSizes.map((size) => (
              <Button
                key={`${color}_${size}`}
                color={color}
                size={size}
                shape="round"
                outline
              >
                {size}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      ))}
    </div>
  );
};
const previewWrapper = css`
  display: flex;
  flex-direction: column;
  h3 {
    width: 4.5rem;
  }
  .preview-button-group {
    margin-top: 1rem;
  }
`;
preview.story = {
  name: 'Prieview',
};
