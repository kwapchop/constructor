import React from 'react';

type Types = {
    text: string,
    icon: any,
}

const InfoComponent: React.FC<Types> = ({text, icon}) => {
    return (
        <div className="info__block">
            <img className="info__img" src={icon} alt=""/>
            <div className="info__text">{text}</div>
        </div>
    )
}

export default InfoComponent;