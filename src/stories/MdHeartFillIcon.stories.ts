import type { Meta, StoryObj } from '@storybook/react';
import { MdHeartFillIcon } from './MdHeartFillIcon';


const meta = {
  title: 'Example/MdHeartFillIcon',
  component: MdHeartFillIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof MdHeartFillIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumHeartFillIcon: Story = {
  args: {
    color: '#FFDF34'
  },
};


