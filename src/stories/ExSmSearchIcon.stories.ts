import type { Meta, StoryObj } from '@storybook/react';
import { ExSmSearchIcon } from './ExSmSearchIcon';


const meta = {
  title: 'Example/ExSmSearchIcon',
  component: ExSmSearchIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ExSmSearchIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExSmallSearchIcon: Story = {
  args: {
    color: '#000000'
  },
};


