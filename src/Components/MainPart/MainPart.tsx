import React from 'react';
import style from './MainPart.module.scss'
import NameOfWork from "./NameOfWork/NameOfWork";
const MainPart = () => {
    return (
        <div>
            <h3 className={style.titleMain}>Строительно-монтажные работы</h3>
            <div className={style.mainPart}>
                <p>Уровень</p>
                <p className={style.workName}>Наименование работ</p>
                <p>Основная з/п</p>
                <p>Оборудование</p>
                <p>Накладные расходы</p>
                <p>Сметная прибыль</p>
            </div>
            <div className={style.description}>
                <NameOfWork title={'Южная строительная площадка'}
                salary={20348}
                equipment={1200}
                credit={2345}
                debt={1234}/>
                <NameOfWork title={'Фундаментальные работы'}
                            salary={20348}
                            equipment={1200}
                            credit={2345}
                            debt={1234}/>
                <NameOfWork title={'Статья работы № 1'}
                            salary={20348}
                            equipment={1200}
                            credit={2345}
                            debt={1234}/>
                <NameOfWork title={'Статья работы № 2'}
                            salary={20348}
                            equipment={1200}
                            credit={2345}
                            debt={1234}/>
            </div>
        </div>
    );
};

export default MainPart;
