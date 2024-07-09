import type { Meta, StoryObj } from '@storybook/react';
import { SmPDFIcon } from './SmPDFIcon';


const meta = {
  title: 'Example/SmPDFIcon',
  component: SmPDFIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof SmPDFIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SmPDFIconType: Story = {
  args: {
    color: '#B32111'
  },
};


