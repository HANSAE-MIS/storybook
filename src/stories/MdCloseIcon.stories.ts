import type { Meta, StoryObj } from '@storybook/react';
import { MdCloseIcon } from './MdCloseIcon';


const meta = {
  title: 'Example/MdCloseIcon',
  component: MdCloseIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdCloseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumCloseIcon: Story = {
  args: {
    color: '#000'
  },
};


