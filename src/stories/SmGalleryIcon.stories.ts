import type { Meta, StoryObj } from '@storybook/react';
import { SmGalleryIcon } from './SmGalleryIcon';


const meta = {
  title: 'Example/SmGalleryIcon',
  component: SmGalleryIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof SmGalleryIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SmGalleryIconType: Story = {
  args: {
    color: '#000'
  },
};


