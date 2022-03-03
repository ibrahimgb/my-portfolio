import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const Socials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/ibrahimgb/" target="_blank">
                <BsLinkedin />
            </a>
            <a href="https://github.com/ibrahimgb" target="_blank">
                <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/ibrahimgb/" target="_blank">
                <BsInstagram />
            </a>
        </div>
    );
};
export default Socials;
