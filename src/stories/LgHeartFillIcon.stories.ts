import type { Meta, StoryObj } from '@storybook/react';
import { LgHeartFillIcon } from './LgHeartFillIcon';


const meta = {
  title: 'Example/LgHeartFillIcon',
  component: LgHeartFillIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof LgHeartFillIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LargeHeartFillIcon: Story = {
  args: {
    color: '#FFDF34'
  },
};


