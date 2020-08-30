import React from 'react';
import '../Start/scss/header.scss';
import logo from '../image/svg/logo.svg';
import myWork from '../image/svg/myWork.svg';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt=""/>
                <span>Конструктор схем</span>
            </div>
            <div className="header__link">
                <a href="/" className="header__link-item header__master-class">
                    <img className="header__link-img" src={myWork} alt=""/>
                    <span className="header__link-title">Мастер-классы</span>
                </a>
                <a href="/" className="header__link-item header__lk">
                    <img className="header__link-img" src={myWork} alt=""/>
                    <span className="header__link-title">Мои схемы</span>
                </a>
            </div>
        </header>
    )
}

export default Header;