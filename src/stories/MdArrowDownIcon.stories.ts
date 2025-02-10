import type { Meta, StoryObj } from '@storybook/react';
import { MdArrowDownIcon } from './MdArrowDownIcon';


const meta = {
  title: 'Example/MdArrowDownIcon',
  component: MdArrowDownIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdArrowDownIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediaumArrowDownIcon: Story = {
  args: {
    color: '#000'
  },
};


