import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta = {
    title: 'Example/TextInput',
    component: TextInput,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        // onChange: fn(),
    },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInputType: Story = {
    args: {
        size: 'small',
        lineType: 'outline'
    },
};
