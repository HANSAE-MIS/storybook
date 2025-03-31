import type { Meta, StoryObj } from '@storybook/react';
import { ExSmArrowUpIcon } from './ExSmArrowUpIcon';


const meta = {
  title: 'Example/ExSmArrowUpIcon',
  component: ExSmArrowUpIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExSmArrowUpIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExSmallArrowUpIcon: Story = {
  args: {
    color: '#000000'
  },
};


