import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta = {
    title: 'Example/TextArea',
    component: TextArea,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        // onChange: fn(),
    },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;



const onChangeEvent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("event", event)
}

export const TextAreaType: Story = {
    args: {
        size: 'small',
        setDisabled: false,
        onChangeEvent: onChangeEvent
    },
};
