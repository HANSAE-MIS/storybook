import type { Meta, StoryObj } from '@storybook/react';
import { MdArrowUpIcon } from './MdArrowUpIcon';


const meta = {
  title: 'Example/MdArrowUpIcon',
  component: MdArrowUpIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdArrowUpIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MdArrowUpIconType: Story = {
  args: {
    color: '#000'
  },
};


