import type { Meta, StoryObj } from '@storybook/react';
import { MdShareIcon } from './MdShareIcon';


const meta = {
  title: 'Example/MdShareIcon',
  component: MdShareIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdShareIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumShareIcon: Story = {
  args: {
    color: '#000'
  },
};


