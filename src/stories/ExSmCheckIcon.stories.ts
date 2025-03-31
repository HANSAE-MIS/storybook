import type { Meta, StoryObj } from '@storybook/react';
import { ExSmCheckIcon } from './ExSmCheckIcon';


const meta = {
  title: 'Example/ExSmCheckIcon',
  component: ExSmCheckIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExSmCheckIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExSmallCheckIcon: Story = {
  args: {
    color: '#000000'
  },
};


