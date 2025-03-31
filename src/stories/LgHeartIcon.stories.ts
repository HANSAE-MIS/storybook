import type { Meta, StoryObj } from '@storybook/react';
import { LgHeartIcon } from './LgHeartIcon';


const meta = {
  title: 'Example/LgHeartIcon',
  component: LgHeartIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof LgHeartIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LargeHeartIcon: Story = {
  args: {
    color: '#FF0000'
  },
};


