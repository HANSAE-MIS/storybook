import type { Meta, StoryObj } from '@storybook/react';
import { MdFabricIcon } from './MdFabricIcon';


const meta = {
  title: 'Example/MdFabricIcon',
  component: MdFabricIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdFabricIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumFabricIcon: Story = {
  args: {
    // color: '#000'
  },
};


