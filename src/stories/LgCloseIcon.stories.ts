import type { Meta, StoryObj } from '@storybook/react';
import { LgCloseIcon } from './LgCloseIcon';


const meta = {
  title: 'Example/LgCloseIcon',
  component: LgCloseIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof LgCloseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LargeCloseIcon: Story = {
  args: {
    color: '#000'
  },
};


