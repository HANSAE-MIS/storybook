import type { Meta, StoryObj } from '@storybook/react';
import { ExSmPrintIcon } from './ExSmPrintIcon';


const meta = {
  title: 'Example/ExSmPrintIcon',
  component: ExSmPrintIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExSmPrintIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExSmallPrintIcon: Story = {
  args: {
    color: '#000000'
  },
};


