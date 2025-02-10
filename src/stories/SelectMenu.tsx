import React from 'react';
import style from './SelectMenu.module.css';


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
    onChangeEvent?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
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
    onChangeEvent
}: SelectMenuProps) => {

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChangeEvent && onChangeEvent(e);
    }
    

    return (
        <div className={style.selectMenuWrap}>
            <div className={`${style.selectMenu} ${size === 'medium' ? style.selectMenuMedium : size === 'small' ? style.selectMenuSmall : ''} ${lineType === 'underline' ? style.selectMenuUnderline : style.selectMenuOutline} ${error && style.selectMenuError}`} style={{width: width + 'px'}}>
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e)} className={style.selectMenuTag}>
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
