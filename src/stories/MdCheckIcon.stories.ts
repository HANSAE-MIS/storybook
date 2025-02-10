import type { Meta, StoryObj } from '@storybook/react';
import { MdCheckIcon } from './MdCheckIcon';


const meta = {
  title: 'Example/MdCheckIcon',
  component: MdCheckIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdCheckIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumCheckIcon: Story = {
  args: {
    color: '#000'
  },
};


