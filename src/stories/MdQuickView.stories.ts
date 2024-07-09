import type { Meta, StoryObj } from '@storybook/react';
import { MdQuickView } from './MdQuickView';


const meta = {
  title: 'Example/MdQuickView',
  component: MdQuickView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdQuickView>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MdQuickViewType: Story = {
  args: {
    color: '#000'
  },
};


