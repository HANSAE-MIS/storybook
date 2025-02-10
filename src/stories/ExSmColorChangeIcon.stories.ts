import type { Meta, StoryObj } from '@storybook/react';
import { ExSmColorChangeIcon } from './ExSmColorChangeIcon';


const meta = {
  title: 'Example/ExSmColorChangeIcon',
  component: ExSmColorChangeIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExSmColorChangeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExSmallColorChangeIcon: Story = {
  args: {
    // color: '#000'
  },
};


