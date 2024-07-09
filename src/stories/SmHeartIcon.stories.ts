import type { Meta, StoryObj } from '@storybook/react';
import { SmHeartIcon } from './SmHeartIcon';


const meta = {
  title: 'Example/SmHeartIcon',
  component: SmHeartIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof SmHeartIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SmHeartIconType: Story = {
  args: {
    color: '#000'
  },
};


