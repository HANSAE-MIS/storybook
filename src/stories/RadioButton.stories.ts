import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta = {
    title: 'Example/RadioButton',
    component: RadioButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        // onChangeEvent: fn(),
    },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;



const options = [
    {
        type: 'option',
        name: 'option1',
        value: 'option1'
    },
    {
        type: 'option',
        name: 'option2',
        value: 'option2'
    },
    {
        type: 'option',
        name: 'option3',
        value: 'option3'
    }
]


export const RadioButtonType: Story = {
    args: {
        disabled: options[0].value,
        options: options
    },
};
