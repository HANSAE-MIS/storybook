import React, { useState } from 'react';
import style from './RadioButton.module.css';


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
                        <label htmlFor={list.value} className={style.radioButtonLabel}>
                            <input id={list.value} value={list.value} type="radio" name={list.type} className='hidden' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                onChange(e);
                            }} disabled={disabled === list.value ? true : false}/>
                            <div className={`${style.radioButtonCheckDefault} ${ischeck === list.value ? style.radioButtonIsChecked: ''} ${disabled === list.value && style.radioButtonDisabled}`}>
                                    {ischeck === list.value && <div className={style.radiobuttonCheckedIcon}></div>}
                            </div>
                            <span className={disabled === list.value ? style.radioButtonLabelCnt : ''}>{list.name}</span>
                        </label>
                    </div>
                )
            })}
        </fieldset>
    )    
};
