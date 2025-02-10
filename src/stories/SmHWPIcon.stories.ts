import type { Meta, StoryObj } from '@storybook/react';
import { SmHWPIcon } from './SmHWPIcon';


const meta = {
  title: 'Example/SmHWPIcon',
  component: SmHWPIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof SmHWPIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SmallHWPIcon: Story = {
  args: {
    color: '#4C9BD7'
  },
};


