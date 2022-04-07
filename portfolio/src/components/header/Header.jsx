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
                <h5>Hi, my name is</h5>
                <h1 className="name">Ibrahim GUOUAL BELHAMIDI.</h1>{" "}
                <h1 className="discription">I build things for the web.</h1>
                <h5 className="text-light">
                    I’m a software engineer specializing in building (and
                    occasionally designing) exceptional digital experiences.
                    Currently, I’m focused on building accessible,
                    human-centered products at Upstatement.
                </h5>
                <Btns />
                <Socials />
                <a
                    href="mailto:ibrahim.guoual.b@gmail.com"
                    target="_blank"
                    className="contact__details"
                >
                    ibrahim.guoual.b@gmail.com
                </a>
                {/* <div className="me">
                    <img src={Me} alt="" />
                </div> */}
            </div>
        </header>
    );
};

export default Header;
