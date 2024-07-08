import React from 'react';
import './TextInput.css';


interface TextInputProps {
    size: 'small' | 'medium',
    lineType: 'outline' | 'underline',
    field?: string,
    error?: boolean,
    errorMessage?: string,
    onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ field='text field', size='medium', error, errorMessage, lineType='outline', onChangeEvent}: TextInputProps) => {
    
    const onFocus = (event: FocusEvent ) => {
        if(!error) {
            const target: any = event.target;
            const parent = target!.parentElement;
            parent.style.borderColor = '#FFDF34';
        }
    }

    return (
        <div className='flex flex-col'>
        <div className={`text-[#000000] flex overflow-hidden ${size === 'medium' ? 'h-[34px] text-[14px]' : size === 'small' ? 'h-[26px] text-[13px]' : ''} ${lineType === 'underline' ? 'border-b border-black' : 'border-[1px] border-[#B3B3B3] rounded-[3px]'} ${error ? '!border-[#EE3737]' : ''}`}>
            <input type='text' className={`grow h-full w-full px-[10px] ${size === 'medium' ? 'py-[10px]' : size === 'small' ? 'py-[6.5px]' : ''}`} onChange={onChangeEvent ? onChangeEvent : () => {}} placeholder={field} onFocus={(event: any) => onFocus(event)}/>
            {error && <div className='h-full w-[26px] flex-none flex items-center justify-start'>
                <div className='w-[13px] h-[13px] rounded-[16px] box-border border border-[#EE3737] text-[#EE3737] flex items-center justify-center text-[11px]'>
                    !
                </div>
            </div>}
        </div>
        {errorMessage && error && <div className='text-[10px] text-[#EE3737] pt-[6px]'>{errorMessage}</div>}
    </div>
    )

    
};
