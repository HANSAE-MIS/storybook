import type { Meta, StoryObj } from '@storybook/react';
import { MdArrowRightIcon } from './MdArrowRightIcon';


const meta = {
  title: 'Example/MdArrowRightIcon',
  component: MdArrowRightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdArrowRightIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumArrowRightIcon: Story = {
  args: {
    color: '#000'
  },
};


