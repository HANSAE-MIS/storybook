import type { Meta, StoryObj } from '@storybook/react';
import { MdTrendIcon } from './MdTrendIcon';


const meta = {
  title: 'Example/MdTrendIcon',
  component: MdTrendIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdTrendIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumTrendIcon: Story = {
  args: {
    color: '#000'
  },
};


