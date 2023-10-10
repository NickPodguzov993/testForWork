import React from 'react';
import "/src/assets/iconMenu.svg";
import "/src/assets/iconArrow.svg";
import  style from './Header.module.scss'


const Header = () => {
    return (
        <div>
            <header className={style.header}>
                <img className={style.iconMenu} src="src/assets/iconMenu.svg" alt=""/>
                <img className={style.iconMenu} src="src/assets/iconArrow.svg" alt=""/>
                <p className={style.headerSpan}>Просмотр</p>
                <p className={style.headerSpanTwo}>Управление</p>
            </header>
        </div>
    );
};

export default Header;
