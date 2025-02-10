import type { Meta, StoryObj } from '@storybook/react';
import { LgExpandViewIcon } from './LgExpandViewIcon';


const meta = {
  title: 'Example/LgExpandViewIcon',
  component: LgExpandViewIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof LgExpandViewIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LargeExpandViewIcon: Story = {
  args: {
    color: '#000'
  },
};


