import type { Meta, StoryObj } from '@storybook/react';
import { ExSmCloseIcon } from './ExSmCloseIcon';


const meta = {
  title: 'Example/ExSmCloseIcon',
  component: ExSmCloseIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExSmCloseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExSmallCloseIcon: Story = {
  args: {
    color: '#000000'
  },
};


