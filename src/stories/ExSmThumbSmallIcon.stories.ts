import type { Meta, StoryObj } from '@storybook/react';
import { ExSmThumbSmallIcon } from './ExSmThumbSmallIcon';


const meta = {
  title: 'Example/ExSmThumbSmallIcon',
  component: ExSmThumbSmallIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExSmThumbSmallIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExSmallThumbSmallIcon: Story = {
  args: {
    color: '#000000'
  },
};


