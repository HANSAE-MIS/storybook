import type { Meta, StoryObj } from '@storybook/react';
import { ExSmArrowDownIcon } from './ExSmArrowDownIcon';


const meta = {
  title: 'Example/ExSmArrowDownIcon',
  component: ExSmArrowDownIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExSmArrowDownIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExSmallArrowDownIcon: Story = {
  args: {
    color: '#000000'
  },
};


