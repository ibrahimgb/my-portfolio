import React from "react";
import "./footer.css";
import { ImFacebook2 } from "react-icons/im";
import { AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
    return (
        <footer id="footer">
            <a href="#" className="footer-logo">
                IbrahimGB
            </a>
            <ul className="premalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">experience</a>
                </li>

                <li>
                    <a href="#portfolio">portfolio</a>
                </li>
                <li>
                    <a href="#testimoniales">testimonials</a>
                </li>
                <li>
                    <a href="#contact">contact</a>
                </li>
            </ul>

            <div className="socials">
                <a
                    href="https://www.facebook.com/profile.php?id=100005323544934"
                    target="_blank"
                >
                    <ImFacebook2 />
                </a>
                <a
                    href="https://www.instagram.com/ibrahim_goual/"
                    target="_blank"
                >
                    <AiFillInstagram />
                </a>
                <a href="twitter.com" target="_blank">
                    <AiFillTwitterSquare />
                </a>
            </div>

            <div className="copyright">
                <small>&copy; ibrahim gb </small>
            </div>
        </footer>
    );
};

export default Footer;
