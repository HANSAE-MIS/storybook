import type { Meta, StoryObj } from '@storybook/react';
import { MdFilterIcon } from './MdFilterIcon';


const meta = {
  title: 'Example/MdFilterIcon',
  component: MdFilterIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdFilterIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MdFilterIconType: Story = {
  args: {
    color: '#000'
  },
};


