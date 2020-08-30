import React from 'react';
import '../Start/scss/footer.scss';
import logo from '../image/svg/footer-logo.svg';
import instagram from '../image/svg/instagram.svg';
import ok from '../image/svg/ok.svg';
import vk from '../image/svg/vk.svg';
import youtube from '../image/svg/youtube.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
                <img src={logo} alt=""/>
            </div>
            <div className="footer__item">
                <a href="" className="footer__link">Вязаный.рф интернет-магазин пряжи</a>
                <a href="" className="footer__link">Доставка по России от 1 мотка</a>
                <a href="" className="footer__link">Каталог</a>
            </div>
            <div className="footer__item">
                <a href="" className="footer__link">Мастер-классы</a>
                <a href="" className="footer__link">Конкурсы</a>
                <a href="" className="footer__link">Скидки</a>
            </div>
            <div className="footer__society">
                <div className="footer__society-text">Вязанный в соцсетях</div>
                <div className="footer__society-icon">
                    <a href="/" className="footer__society-link">
                        <img src={instagram} alt=""/>
                    </a>
                    <a href="/" className="footer__society-link">
                        <img src={ok} alt=""/>
                    </a>
                    <a href="/" className="footer__society-link">
                        <img src={vk} alt=""/>
                    </a>
                    <a href="/" className="footer__society-link">
                        <img src={youtube} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;