import type { Meta, StoryObj } from '@storybook/react';
import { LgShareIcon } from './LgShareIcon';


const meta = {
  title: 'Example/LgShareIcon',
  component: LgShareIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof LgShareIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LgShareIconType: Story = {
  args: {
    color: '#000'
  },
};


