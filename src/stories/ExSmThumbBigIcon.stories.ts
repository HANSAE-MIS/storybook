import type { Meta, StoryObj } from '@storybook/react';
import { ExSmThumbBigIcon } from './ExSmThumbBigIcon';


const meta = {
  title: 'Example/ExSmThumbBigIcon',
  component: ExSmThumbBigIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExSmThumbBigIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExSmallThumbBigIcon: Story = {
  args: {
    color: '#000000'
  },
};


