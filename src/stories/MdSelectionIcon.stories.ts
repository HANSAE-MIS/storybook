import type { Meta, StoryObj } from '@storybook/react';
import { MdSelectionIcon } from './MdSelectionIcon';


const meta = {
  title: 'Example/MdSelectionIcon',
  component: MdSelectionIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdSelectionIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumSelectionIcon: Story = {
  args: {
    color: '#000'
  },
};


