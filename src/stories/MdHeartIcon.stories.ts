import type { Meta, StoryObj } from '@storybook/react';
import { MdHeartIcon } from './MdHeartIcon';


const meta = {
  title: 'Example/MdHeartIcon',
  component: MdHeartIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdHeartIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumHeartIcon: Story = {
  args: {
    color: '#FF0000'
  },
};


