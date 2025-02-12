import type { Meta, StoryObj } from '@storybook/react';
import { ExSmArrowLeftIcon } from './ExSmArrowLeftIcon';


const meta = {
  title: 'Example/ExSmArrowLeftIcon',
  component: ExSmArrowLeftIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExSmArrowLeftIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExSmallArrowLeftIcon: Story = {
  args: {
    color: '#000000'
  },
};


