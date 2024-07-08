import React, { useState } from 'react';
import './RadioButton.css';


type OPTIONS = {
    type: string;
    name: string;
    value: string;
}



interface TextInputProps {
    disabled?: string;
    options: OPTIONS[];
    onChangeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton = ({disabled, options, onChangeEvent}: TextInputProps) => {
    
    const [ischeck, setIscheck] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setIscheck((prev) => !prev);
        setIscheck(e.target.value);
        onChangeEvent && onChangeEvent(e);
    }

    return (
        <fieldset>
            {options.map((list, index) => {
                return (
                    <div key={list.value}>
                        <label htmlFor={list.value} className='flex items-center'>
                            <input id={list.value} value={list.value} type="radio" name={list.type} className='hidden' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                onChange(e);
                            }} disabled={disabled === list.value ? true : false}/>
                            <div className={`w-[16px] h-[16px] rounded-[16px] flex items-center justify-center border-[1px] mr-[10px] ${ischeck === list.value ? 'border-[#FFDF34] bg-[#FFDF34]' : 'border-[#B3B3B3] bg-white'} ${disabled === list.value && 'bg-[#E5E5E5] !border-[#B3B3B3]'}`}>
                                    {ischeck === list.value && <div className='w-[8px] h-[8px] rounded-[8px] bg-black'></div>}
                            </div>
                            <span className={disabled === list.value ? 'text-[#B3B3B3]' : 'text-black'}>{list.name}</span>
                        </label>
                    </div>
                )
            })}
        </fieldset>
    )    
};
