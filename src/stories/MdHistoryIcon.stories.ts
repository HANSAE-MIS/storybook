import type { Meta, StoryObj } from '@storybook/react';
import { MdHistoryIcon } from './MdHistoryIcon';


const meta = {
  title: 'Example/MdHistoryIcon',
  component: MdHistoryIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdHistoryIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MdHistoryIconType: Story = {
  args: {
    color: '#000'
  },
};


