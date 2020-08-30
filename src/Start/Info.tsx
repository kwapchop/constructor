import React from 'react';
import './scss/info.scss';
import InfoComponent from "./InfoComponent";
import sheme1 from '../image/svg/cheme1.svg';
import sheme2 from '../image/svg/cheme2.svg';
import sheme3 from '../image/svg/cheme3.svg';
import Button from "./Button";

type Info={
    changeScreen:any
}

const Info: React.FC<Info> = (props) => {
    return (
            <div className="info">
                <div className="info__inner">
                    <InfoComponent text='Создавайте собственные схемы' icon={sheme1}/>
                    <InfoComponent text='Объединяйте элементы' icon={sheme2}/>
                    <InfoComponent text='Сохраняйте схемы в личном кабинете, чтобы вернуться к их редактированию'
                                   icon={sheme3}/>
                </div>
                <Button changeScreen={props.changeScreen}/>
            </div>
    )
}
export default Info;