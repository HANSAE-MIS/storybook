import type { Meta, StoryObj } from '@storybook/react';
import { MdLinkIcon } from './MdLinkIcon';


const meta = {
  title: 'Example/MdLinkIcon',
  component: MdLinkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdLinkIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumLinkIcon: Story = {
  args: {
    color: '#000'
  },
};


