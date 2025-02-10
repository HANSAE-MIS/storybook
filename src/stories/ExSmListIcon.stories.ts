import type { Meta, StoryObj } from '@storybook/react';
import { ExSmListIcon } from './ExSmListIcon';


const meta = {
  title: 'Example/ExSmListIcon',
  component: ExSmListIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExSmListIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExSmallListIcon: Story = {
  args: {
    color: '#000000'
  },
};


