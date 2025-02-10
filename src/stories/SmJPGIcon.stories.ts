import type { Meta, StoryObj } from '@storybook/react';
import { SmJPGIcon } from './SmJPGIcon';


const meta = {
  title: 'Example/SmJPGIcon',
  component: SmJPGIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof SmJPGIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SmallJPGIcon: Story = {
  args: {
    color: '#F2730C'
  },
};


