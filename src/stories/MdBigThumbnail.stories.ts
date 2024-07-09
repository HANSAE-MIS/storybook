import type { Meta, StoryObj } from '@storybook/react';
import { MdBigThumbnail } from './MdBigThumbnail';


const meta = {
  title: 'Example/MdBigThumbnail',
  component: MdBigThumbnail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdBigThumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MdBigThumbnailType: Story = {
  args: {
    color: '#000'
  },
};


