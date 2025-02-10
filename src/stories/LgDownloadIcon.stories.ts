import type { Meta, StoryObj } from '@storybook/react';
import { LgDownloadIcon } from './LgDownloadIcon';


const meta = {
  title: 'Example/LgDownloadIcon',
  component: LgDownloadIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof LgDownloadIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LargeDownloadIcon: Story = {
  args: {
    color: '#000'
  },
};


