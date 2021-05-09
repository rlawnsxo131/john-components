import { withKnobs } from '@storybook/addon-knobs';
import Palette from './Palette';

export default {
  title: 'components|Base/Palette',
  component: Palette,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'palette',
    docs: {
      // page: mdx,
    },
  },
};

export const Swatches = () => {
  return <Palette />;
};
