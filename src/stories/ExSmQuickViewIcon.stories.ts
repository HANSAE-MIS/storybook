import type { Meta, StoryObj } from '@storybook/react';
import { ExSmQuickViewIcon } from './ExSmQuickViewIcon';


const meta = {
  title: 'Example/ExSmQuickViewIcon',
  component: ExSmQuickViewIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExSmQuickViewIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExSmallThumbBigIcon: Story = {
  args: {
    color: '#000000'
  },
};


