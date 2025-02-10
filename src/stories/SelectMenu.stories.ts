import type { Meta, StoryObj } from '@storybook/react';
import { SelectMenu } from './SelectMenu';

const meta = {
    title: 'Example/SelectMenu',
    component: SelectMenu,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
    },
} satisfies Meta<typeof SelectMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const onChangeEvent = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e);
}


export const SelectMenuType: Story = {
    args: {
        size: 'small',
        lineType: 'outline',
        options: [
            {
                name: 'option1',
                value: 'option1'
            },
            {
                name: 'option2',
                value: 'option2'
            },
            {
                name: 'option3',
                value: 'option3'
            }
        ],
        onChangeEvent: onChangeEvent
    },
};
