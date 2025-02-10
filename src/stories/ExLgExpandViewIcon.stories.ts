import type { Meta, StoryObj } from '@storybook/react';
import { ExLgExpandViewIcon } from './ExLgExpandViewIcon';


const meta = {
  title: 'Example/ExLgExpandViewIcon',
  component: ExLgExpandViewIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExLgExpandViewIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExLargeExpandViewIcon: Story = {
  args: {
    color: '#000'
  },
};


