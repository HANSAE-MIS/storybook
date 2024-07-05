import type { Meta, StoryObj } from '@storybook/react';
import { CheckBox } from './CheckBox';

const meta = {
    title: 'Example/CheckBox',
    component: CheckBox,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        // onChangeEvent: fn(),
    },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;




export const CheckBoxType: Story = {
    args: {
        id: 'name',
        label: 'name',
        disabled: false
    },
};
