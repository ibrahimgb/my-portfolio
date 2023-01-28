import React from "react";
import Btns from "./Btns";
import "./header.css";
import "../../index.css";

import Socials from "./Socials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hi, my name is</h5>
                <h1 className="name">Ibrahim GUOUAL BELHAMIDI.</h1>{" "}
                <h1 className="discription">I build things for the web.</h1>
                <h5 className="text-light">
                I’m a passionate software engineer, self-learner, and highly motivated developer who loves solving problems, learning new skills!
<br/>
Passionate about IoT and embedded applications. Currently, I’m focused on building accessible mobile-first web apps. and aiming to use proven front-end and back-end skills to build fast,  clean scalable code, and maintainable software.
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
