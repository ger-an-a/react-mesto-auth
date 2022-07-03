import headerLogo from '../images/logo.svg';
import React from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Header(props) {
    let navElement;
    const { path, url } = useRouteMatch();
    const history = useHistory();

    function handleSignOut() {
        localStorage.removeItem('token');
        props.setLoggedIn(false);
        history.push('/sign-in');
    }

    switch (url) {
        case '/sign-up':
            navElement = (
                <NavLink to="/sign-in" className="header__link header__link_active link">Вход</NavLink>)
            break;

        case '/sign-in':
            navElement = (
                <NavLink to="/sign-up" className="header__link header__link_active link">Регистрация</NavLink>)
            break;
        case '/':
            navElement = (
                <div>
                    <NavLink exact to="/" activeClassName="header__link_active" className="header__link"> {props.email}</NavLink>
                    <NavLink onClick={handleSignOut} to="/sign-up" className="header__link link">Выйти</NavLink>
                </div>
            )
            break;
    }

    return (
        <header className="header">
            <img src={headerLogo} alt="Логотип Mesto Russia." className="header__logo" />
            {navElement}
        </header>
    );

}

export default Header;