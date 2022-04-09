import { NavLink } from "react-router-dom";
import { useState } from "react";
import Socials from "../Socials";
import './style.css'

const Header = () => {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active);
    };

    return (
        <>         
            <article className={active ? "icon icon-active" : "icon"} onClick={ToggleMode}>
                <div className="hamburguer-1 hamburguer-icon-1"></div>
                <div className="hamburguer-2 hamburguer-icon-2"></div>
                <div className="hamburguer-3 hamburguer-icon-3"></div>
                <div className="hamburguer-4 hamburguer-icon-4"></div>
            </article>
            <section className={active ? "navbar navbar-open" : "navbar navbar-close"}>
                <nav className="navbar__container">
                    <NavLink
                        exact to="/"
                        activeClassName="selected"
                        className="navbar__item"
                        onClick={ToggleMode}
                    >
                        início
                    </NavLink>

                    <NavLink
                        to='/arquiteta'
                        activeClassName="selected"
                        className="navbar__item"
                        onClick={ToggleMode}
                    >
                        arquiteta
                    </NavLink>

                    <NavLink
                        to='/portfolio'
                        activeClassName="selected"
                        className="navbar__item"
                        onClick={ToggleMode}
                    >
                        portfólio
                    </NavLink>

                    <NavLink
                        to='/contato'
                        activeClassName="selected"
                        className="navbar__item"
                        onClick={ToggleMode}
                    >
                        contato
                    </NavLink>

                    <NavLink
                        to='/login'
                        activeClassName="selected"
                        className="navbar__item"
                        onClick={ToggleMode}
                    >
                        login
                    </NavLink>
                    <div className="social-mode">
                        <Socials />
                    </div>
                    <div className="toggle-ghost">
                    </div>
                    
                </nav>

            </section>

        </>

    )
}

export default Header;