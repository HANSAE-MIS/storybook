import type { Meta, StoryObj } from '@storybook/react';
import { MdSearchIcon } from './MdSearchIcon';


const meta = {
  title: 'Example/MdSearchIcon',
  component: MdSearchIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdSearchIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MdSearchIconType: Story = {
  args: {
    color: '#000'
  },
};


