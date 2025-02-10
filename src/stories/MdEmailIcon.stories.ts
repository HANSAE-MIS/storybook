import type { Meta, StoryObj } from '@storybook/react';
import { MdEmailIcon } from './MdEmailIcon';


const meta = {
  title: 'Example/MdEmailIcon',
  component: MdEmailIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdEmailIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumEmailIcon: Story = {
  args: {
    color: '#000'
  },
};


