import type { Meta, StoryObj } from '@storybook/react';
import { ModalPopup } from './ModalPopup';


const meta = {
  title: 'Example/ModalPopup',
  component: ModalPopup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {},
} satisfies Meta<typeof ModalPopup>;

export default meta;
type Story = StoryObj<typeof meta>;

const onClose = () => {

}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ModalPopupType: Story = {
  args: {
    onClose: onClose,
    children: '안녕하세요'
  },
};


