import { withKnobs } from '@storybook/addon-knobs';
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
  return <Input />;
};
props.story = {
  name: 'Props',
};
