import React from "react";
import "./about.css";

import ME from "../../assets/ibrahim.jpeg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <section id="about">
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
                        Hello! My name is Ibrahim and I enjoy making stuff. I'm
                        from a small town near Oran, Algeria.
                        <br /> My interest in web development started back in
                        2020 when I decided to make a smart fridge where I had
                        made a web app that can monitor and control the fridge,
                        and from it to a react native app. taught me a lot about
                        React!
                        <br /> As for now, my main focus is web development,
                        because the web is here to stay! while I tend to use my
                        free time to work on my side projects or indie games.
                        Besides being something that I like to do, my personal
                        projects help me to fill my never-ending curiosity since
                        I can't help myself not trying out that new framework
                        that everyone is talking about. As a result, I keep my
                        set of skills and knowledge as broad and updated as
                        possible.
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
