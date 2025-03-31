import type { Meta, StoryObj } from '@storybook/react';
import { SmHeartFillIcon } from './SmHeartFillIcon';


const meta = {
  title: 'Example/SmHeartFillIcon',
  component: SmHeartFillIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof SmHeartFillIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SmallHeartFillIcon: Story = {
  args: {
    color: '#FFDF34'
  },
};


