import React from 'react';
import './TextInput.css';


type OPTIONS_PROPS = {
    name: string;
    value: string;
}


interface SelectMenuProps {
    width?: string,
    size: 'small' | 'medium',
    lineType: 'outline' | 'underline',
    options: OPTIONS_PROPS[],
    field?: string,
    error?: boolean,
    errorMessage?: string,
    onChange?: () => void;
}

export const SelectMenu = ({ 
    width='240', 
    field='text field', 
    options=[
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
    size='medium', 
    error, 
    errorMessage, 
    lineType='outline', 
    onChange
}: SelectMenuProps) => {
    

    return (
        <div className='flex flex-col'>
            <div className={`relative min-w-[240px] text-[#000000] flex overflow-hidden ${size === 'medium' ? 'h-[34px] text-[14px]' : size === 'small' ? 'h-[26px] text-[13px]' : ''} ${lineType === 'underline' ? 'border-b border-black' : 'border border-[#B3B3B3] rounded-[3px]'} ${error ? 'border-[#EE3737]' : ''}`} style={{width: width + 'px'}}>
                <select onChange={onChange} className='relative z-[2] w-full h-full box-border px-[10px] bg-transparent'>
                    {
                        options.map((list: OPTIONS_PROPS) => {
                            return (
                                <option key={list.value} value={list.value}>{list.name}</option>
                            )
                        })
                    }
                </select>

                <img className="z-[1] w-[16px] h-[16px] absolute top-[50%] right-[10px] translate-y-[-50%]" src={`${process.env.PUBLIC_URL}/icon/down.png`} alt="down icon"/>
            </div>
            {errorMessage && error && <div className='text-[10px] text-[#EE3737] pt-[6px]'>{errorMessage}</div>}
    </div>
    )

    
};
