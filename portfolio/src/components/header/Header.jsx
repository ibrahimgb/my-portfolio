import React from "react";
import Btns from "./Btns";
import "./header.css";
import "../../index.css";
import Me from "../../assets/me.png";
import Socials from "./Socials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Ibrahim GUOUAL BELHAMIDI</h1>
                <h5 className="text-light">Softwer ingenire</h5>
                <Btns />
                <Socials />
                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
                <div className="me">
                    <img src={Me} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;
