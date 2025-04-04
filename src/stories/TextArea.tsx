import React from 'react';
import style from './TextArea.module.css';


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
            parent.style.borderColor = "#FFDF34";
        }
    }

    return (
        <div className={style.textAreaWrap}>
            <div className={`${style.textArea} ${size === 'medium' ? style.textAreaMedium : size === 'small' ? style.textAreaSmall : ''} ${error ? style.textAreaError : ''} ${setDisabled ? '!border-[#B3B3B3]' : ''}`} style={{width: `${width}px`}}>
            {setDisabled ?
                <textarea className={style.textAreaTag} name="" id="" onFocus={(event: any) => onFocus(event)} disabled onChange={onChangeEvent ? (event: React.ChangeEvent<HTMLTextAreaElement>) => onChangeEvent(event) : () => {}}></textarea>
                :
                <textarea className={style.textAreaTag} name="" id="" onFocus={(event: any) => onFocus(event)} onChange={onChangeEvent ? (event: React.ChangeEvent<HTMLTextAreaElement>) => onChangeEvent(event) : () => {}}></textarea>
            }
        </div>
        {errorMessage && error && <div className='text-[10px] text-[#EE3737] pt-[6px]'>{errorMessage}</div>}
    </div>
    )

    
};
