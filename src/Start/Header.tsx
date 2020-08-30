import React from 'react';
import './scss/header.scss';
import logo from '../image/svg/logo.svg';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt=""/>
                <span>Конструктор схем</span>
            </div>
            <div className="header__link">
                <div className="header__master-class">
                    <img className="header__link-img" src="" alt=""/>
                    <span className="header__link-title">Мастер-классы</span>
                </div>
                <div className="header__lk">
                    <img className="header__link-img" src="" alt=""/>
                    <span className="header__link-title">Мои схемы</span>
                </div>
            </div>
        </header>
    )
}

export default Header;