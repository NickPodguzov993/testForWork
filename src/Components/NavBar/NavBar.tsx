import React from 'react';
import "/src/assets/iconArrowDown.svg";
import {SelectTitle} from "./SelectTitle/SelectTitle";
import style from './NavBar.module.scss'

export const NavBar = () => {
    return (
        <div className={style.navBar}>
            <div className={style.selectName}>
                <div>
                    <h3 className={style.nameProject}>Название проекта </h3>
                    <span className={style.spanSelect}>Аббревиатура</span>
                </div>
                <img src="src/assets/iconArrowDown.svg" alt=""/>

            </div>
            <SelectTitle title={'По проекту'}/>
            <SelectTitle title={'Объекты'}/>
            <SelectTitle title={'РД'}/>
            <SelectTitle title={'МТО'}/>
            <SelectTitle  title={'СМР'}/>
            <SelectTitle title={'График'}/>
            <SelectTitle title={'МиМ'}/>
            <SelectTitle title={'Рабочие'}/>
            <SelectTitle title={'Капвложения'}/>
            <SelectTitle title={'Бюджет'}/>
            <SelectTitle title={'Финансирование'}/>
            <SelectTitle title={'Панорамы'}/>
            <SelectTitle title={'Камеры'}/>
            <SelectTitle title={'Поручения'}/>
            <SelectTitle title={'Контрагенты'}/>
        </div>
    );
};

