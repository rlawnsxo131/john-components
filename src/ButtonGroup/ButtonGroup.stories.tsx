import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import Button from '../Button/Button';
import {
  buttonColors,
  buttonDirections,
  buttonSizes,
} from '../lib/mocks/buttonMock';
import ButtonGroup from './ButtonGroup';
import buttonGroupMdx from './ButtonGroup.mdx';

export default {
  title: 'components|Button/ButtonGroup',
  component: ButtonGroup,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: buttonGroupMdx,
    },
  },
};

export const props = () => {
  const color = select('color', buttonColors, 'violet');
  const size = select('size', buttonSizes, 'medium');
  const direction = select('direction', buttonDirections, 'row');
  const gap = text('gap', '0.5rem');
  const rightAlign = boolean('rightAlign', false);
  return (
    <ButtonGroup gap={gap} direction={direction} rightAlign={rightAlign}>
      <Button color={color} size={size} outline>
        취소
      </Button>
      <Button color={color} size={size}>
        확인
      </Button>
    </ButtonGroup>
  );
};
props.story = {
  name: 'Props',
};

export const rightAlign = () => {
  const gap = text('gap', '0.5rem;');
  return (
    <ButtonGroup gap={gap} rightAlign>
      <Button color="violet" outline>
        취소
      </Button>
      <Button color="violet">확인</Button>
    </ButtonGroup>
  );
};
rightAlign.story = {
  name: 'RightAlign',
};

export const column = () => {
  const gap = text('gap', '0.5rem;');
  return (
    <ButtonGroup direction="column" gap={gap}>
      <Button color="violet" outline>
        취소
      </Button>
      <Button color="violet">확인</Button>
    </ButtonGroup>
  );
};
column.story = {
  name: 'Column',
};
