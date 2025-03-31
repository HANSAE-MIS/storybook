import React from 'react';
import style from './TextInput.module.css';


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
        <div className={style.textInputWrap}>
        <div className={`${style.textInputWrapChild} ${size === 'medium' ? style.textInputMedium : size === 'small' ? style.textInputSmall : ''} ${lineType === 'underline' ? style.textInputUnderline : style.textInputOutline} ${error ? style.textInputError : ''}`}>
            <input type='text' className={`${style.textInputTag} ${size === 'medium' ? style.textInputTagMedium : size === 'small' ? style.textInputTagSmall : ''}`} onChange={onChangeEvent ? onChangeEvent : () => {}} placeholder={field} onFocus={(event: any) => onFocus(event)}/>
            {error && <div className={style.textInputErrorWrap}>
                <div className={style.textInputErrorWrapIcon}>
                    !
                </div>
            </div>}
        </div>
        {errorMessage && error && <div className='text-[10px] text-[#EE3737] pt-[6px]'>{errorMessage}</div>}
    </div>
    )

    
};
