import type { Meta, StoryObj } from '@storybook/react';
import { SmTrashIcon } from './SmTrashIcon';


const meta = {
  title: 'Example/SmTrashIcon',
  component: SmTrashIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof SmTrashIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SmTrashIconType: Story = {
  args: {
    color: '#000'
  },
};


