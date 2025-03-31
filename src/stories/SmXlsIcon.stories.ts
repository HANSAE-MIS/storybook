import type { Meta, StoryObj } from '@storybook/react';
import { SmXlsIcon } from './SmXlsIcon';


const meta = {
  title: 'Example/SmXlsIcon',
  component: SmXlsIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof SmXlsIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SmallXlsIcon: Story = {
  args: {
    color: '#307344'
  },
};


