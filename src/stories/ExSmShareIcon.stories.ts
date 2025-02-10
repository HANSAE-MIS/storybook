import type { Meta, StoryObj } from '@storybook/react';
import { ExSmShareIcon } from './ExSmShareIcon';


const meta = {
  title: 'Example/ExSmShareIcon',
  component: ExSmShareIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExSmShareIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExSmallShareIcon: Story = {
  args: {
    color: '#000000'
  },
};


