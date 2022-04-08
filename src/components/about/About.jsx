import React from "react";
import "./about.css";

import ME from "../../assets/mepic.jpg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me__img">
                        <img src={ME} alt="persenal pic of ibrahim"></img>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <div className="about__card">
                            <BsAwardFill className="about__icon" />
                            <h5>Experionce</h5>
                            <small>1+ Years of experience</small>
                        </div>

                        <div className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </div>

                        <div className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>80+ Complited Projects</small>
                        </div>
                    </div>
                    <p>
                        {" "}
                        lorem30 Free Portfolio Vector Icon in SVG format. ✓
                        Download Free Portfolio Vector and icons for commercial
                        use. Portfolio SVG vector illustration graphic art ...
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        let's talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
