import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
    const [activeNav, setActiveNav] = React.useState("#"); //className="active"

    return (
        <nav>
            <a
                href="#"
                onClick={() => {
                    setActiveNav(() => "#");
                }}
                className={activeNav === "#" ? "active" : ""}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => {
                    setActiveNav(() => "#about");
                }}
                className={activeNav === "#about" ? "active" : ""}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => {
                    setActiveNav(() => "#experience");
                }}
                className={activeNav === "#experience" ? "active" : ""}
            >
                <BiBook />
            </a>
            <a
                href="#portfolio"
                onClick={() => {
                    setActiveNav(() => "#portfolio");
                }}
                className={activeNav === "#portfolio" ? "active" : ""}
            >
                <RiServiceLine />
            </a>
            <a
                href="#contact"
                onClick={() => {
                    setActiveNav(() => "#contact");
                }}
                className={activeNav === "#contact" ? "active" : ""}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default Nav;
