import type { Meta, StoryObj } from '@storybook/react';
import { SmFilterIcon } from './SmFilterIcon';


const meta = {
  title: 'Example/SmFilterIcon',
  component: SmFilterIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof SmFilterIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SmFilterIconType: Story = {
  args: {
    color: '#000'
  },
};


