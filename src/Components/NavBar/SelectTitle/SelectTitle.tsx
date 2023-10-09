import React from 'react';
import "/src/assets/iconSelect.svg";
import style from './SelectTitle.module.scss'

type SelectType = {
    title: string
}

export const SelectTitle = (props: SelectType) => {
    return (
        <div className={style.selectTitle}>
            <img src="src/assets/iconSelect.svg" alt=""/>
            <p className={style.title}>{props.title}</p>
        </div>

    );
};

