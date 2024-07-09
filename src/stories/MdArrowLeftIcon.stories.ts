import type { Meta, StoryObj } from '@storybook/react';
import { MdArrowLeftIcon } from './MdArrowLeftIcon';


const meta = {
  title: 'Example/MdArrowLeftIcon',
  component: MdArrowLeftIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdArrowLeftIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MdArrowLeftIconType: Story = {
  args: {
    color: '#000'
  },
};


