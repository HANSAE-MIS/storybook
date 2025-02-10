import type { Meta, StoryObj } from '@storybook/react';
import { ExSmArrowRightIcon } from './ExSmArrowRightIcon';


const meta = {
  title: 'Example/ExSmArrowRightIcon',
  component: ExSmArrowRightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExSmArrowRightIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExSmallArrowRightIcon: Story = {
  args: {
    color: '#000000'
  },
};


