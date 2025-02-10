import type { Meta, StoryObj } from '@storybook/react';
import { MdSalesDetailIcon } from './MdSalesDetailIcon';


const meta = {
  title: 'Example/MdSalesDetailIcon',
  component: MdSalesDetailIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdSalesDetailIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumSalesDetailIcon: Story = {
  args: {
    color: '#000'
  },
};


