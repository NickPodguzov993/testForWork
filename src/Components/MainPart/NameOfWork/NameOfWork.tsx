import React from 'react';
import  style from './NameOfWork.module.scss'
import "/src/assets/Icon.svg";

type NameOfWorkType = {
    title: string
    salary: number
    equipment: number
    credit: number
    debt: number
}

const NameOfWork = (props:NameOfWorkType) => {
    return (
        <div className={style.nameOfWork}>
            <img src="src/assets/Icon.svg" alt=""/>
            <p className={style.title}>{props.title}</p>
            <p className={style.salary}>{props.salary}</p>
            <p className={style.equipment}>{props.equipment}</p>
            <p className={style.credit}>{props.credit}</p>
            <p>{props.debt}</p>

        </div>
    );
};

export default NameOfWork;
