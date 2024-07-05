import React, { useState } from 'react';
import './TextArea.css';


interface TextInputProps {
    id: string,
    label: string;
    rounded?: boolean;
    disabled?: boolean;
    onChangeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = ({id, label, rounded=false, disabled=false, onChangeEvent}: TextInputProps) => {
    
    const [ischeck, setIscheck] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIscheck((prev) => !prev);
        onChangeEvent && onChangeEvent(e);
    }

    return (
        <div>
            <input id={id} type="checkbox" name={id} value="scales" className='hidden' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(e);
            }} checked={ischeck} disabled={disabled}/>
            <label htmlFor={id} className='flex items-center'>
                <div className={`w-[16px] h-[16px] flex items-center justify-center border mr-[10px] ${ischeck ? 'border-[#FFDF34] bg-[#FFDF34]' : 'border-[#B3B3B3] bg-white'} ${rounded ? 'rounded-[16px]' : 'rounded-[2px]'} ${disabled && 'bg-[#E5E5E5] !border-[#B3B3B3]'}`}>
                        {ischeck && <img src={`${process.env.PUBLIC_URL}/icon/check.png`} alt="checkbox icon" />}
                </div>
                <span className={disabled ? 'text-[#B3B3B3]' : 'text-black'}>{label}</span>
            </label>
        </div>
    )    
};
