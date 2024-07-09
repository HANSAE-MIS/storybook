import type { Meta, StoryObj } from '@storybook/react';
import { MdThumbnail } from './MdThumbnail';


const meta = {
  title: 'Example/MdThumbnail',
  component: MdThumbnail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdThumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MdThumbnailType: Story = {
  args: {
    color: '#000'
  },
};


