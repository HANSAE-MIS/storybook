import type { Meta, StoryObj } from '@storybook/react';
import { SmWordIcon } from './SmWordIcon';


const meta = {
  title: 'Example/SmWordIcon',
  component: SmWordIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof SmWordIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SmallWordIcon: Story = {
  args: {
    color: '#2A559A'
  },
};


