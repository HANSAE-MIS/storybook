import type { Meta, StoryObj } from '@storybook/react';
import { MdDownloadIcon } from './MdDownloadIcon';


const meta = {
  title: 'Example/MdDownloadIcon',
  component: MdDownloadIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdDownloadIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumDownloadIcon: Story = {
  args: {
    color: '#000'
  },
};


