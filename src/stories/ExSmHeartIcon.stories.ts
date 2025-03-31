import type { Meta, StoryObj } from '@storybook/react';
import { ExSmHeartIcon } from './ExSmHeartIcon';


const meta = {
  title: 'Example/ExSmHeartIcon',
  component: ExSmHeartIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExSmHeartIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExSmallHeartIcon: Story = {
  args: {
    color: '#000000'
  },
};


