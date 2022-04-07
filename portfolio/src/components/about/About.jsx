import React from "react";
import "./about.css";

import ME from "../../assets/mepic.jpg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <section id="about">
            <h5></h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me__img">
                        <img src={ME} alt="persenal pic of ibrahim"></img>
                    </div>
                </div>

                <div className="about__content">
                    {/*
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
                    */}

                    <p>
                        {" "}
                        Hello! My name is Brittany and I enjoy creating things
                        that live on the internet. My interest in web
                        development started back in 2012 when I decided to try
                        editing custom Tumblr themes — turns out hacking
                        together a custom reblog button taught me a lot about
                        HTML & CSS! Fast-forward to today, and I’ve had the
                        privilege of working at an advertising agency, a
                        start-up, a huge corporation, and a student-led design
                        studio. My main focus these days is building accessible,
                        inclusive products and digital experiences at
                        Upstatement for a variety of clients.
                    </p>
                    {/*
                    <a href="#contact" className="btn btn-primary">
                        let's talk
                    </a>
                    */}
                </div>
            </div>
        </section>
    );
};

export default About;
