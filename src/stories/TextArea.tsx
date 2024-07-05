import React from 'react';
import './TextArea.css';


interface TextInputProps {
    width?: number,
    size: 'small' | 'medium',
    field?: string,
    error?: boolean,
    errorMessage?: string,
    onChangeEvent?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    setDisabled?: boolean
}

export const TextArea = ({ width=320, field='text field', size='medium', error, errorMessage, onChangeEvent, setDisabled=false}: TextInputProps) => {
    
    const onFocus = (event: FocusEvent ) => {
        if(!error) {
            const target: any = event.target;
            const parent = target!.parentElement;
            parent.style.borderColor = '#FFDF34';
        }
    }

    return (
        <div className='flex flex-col'>
            <div className={`border text-[#000000] flex overflow-hidden ${size === 'medium' ? 'h-[34px] text-[14px]' : size === 'small' ? 'h-[140px] text-[13px]' : ''} ${error ? '!border-[#EE3737]' : 'border-[#B3B3B3]'} rounded-[3px]} ${setDisabled && '!border-[#B3B3B3]' }`} style={{width: `${width}px`}}>
            {setDisabled ?
                <textarea className='box-border w-full h-full p-[10px]' name="" id="" onFocus={(event: any) => onFocus(event)} disabled onChange={onChangeEvent ? (event: React.ChangeEvent<HTMLTextAreaElement>) => onChangeEvent(event) : () => {}}></textarea>
                :
                <textarea className='box-border w-full h-full p-[10px]' name="" id="" onFocus={(event: any) => onFocus(event)}></textarea>
            }
        </div>
        {errorMessage && error && <div className='text-[10px] text-[#EE3737] pt-[6px]'>{errorMessage}</div>}
    </div>
    )

    
};
