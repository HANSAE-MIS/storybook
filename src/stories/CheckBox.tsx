import React, { useState } from 'react';
import style from './CheckBox.module.css'


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
            <input id={id} type="checkbox" name={id} value="scales" className={style.checkboxInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(e);
            }} checked={ischeck} disabled={disabled}/>
            <label htmlFor={id} className={style.checkboxLabel}>
                <div className={`${style.checkbox} ${ischeck ? style.checkboxIscheck : ''} ${rounded ? style.checkboxRounded : ''} ${disabled && style.checkboxDisabled}`}>
                        {ischeck && !disabled && <img src={`${process.env.PUBLIC_URL}/icon/check.png`} alt="checkbox icon" />}
                </div>
                <span className={disabled ? style.checkboxLabelDisabled : ''}>{label}</span>
            </label>
        </div>
    )    
};
