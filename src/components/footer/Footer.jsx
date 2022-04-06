import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">HurtadoMovies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Inicio</Link>
                        <Link to="/">Contacto</Link>
                        <Link to="/">Terminos de servicios</Link>
                        <Link to="/">Saber mas</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">En vivo</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Politicas de privacidad</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Lo mas visto</Link>
                        <Link to="/">Visto Recientemente</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
