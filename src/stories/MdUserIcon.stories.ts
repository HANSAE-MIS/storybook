import type { Meta, StoryObj } from '@storybook/react';
import { MdUserIcon } from './MdUserIcon';


const meta = {
  title: 'Example/MdUserIcon',
  component: MdUserIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdUserIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumUserIcon: Story = {
  args: {
    color: '#000'
  },
};


