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

const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
}


export const CheckboxType: Story = {
    args: {
        id: 'name',
        label: 'name',
        disabled: false,
        onChangeEvent: onChangeEvent
    },
};
