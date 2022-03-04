import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
    return (
        <section id="experience">
            <h5>what skills i have!</h5>
            <h2>My experience</h2>
            <div className="container experience__container">
                <div className="web-dev__experience">
                    <h3>Frontend Develepment</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon " />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon " />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">
                                    Intermidiet
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon " />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon " />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon " />
                            <div>
                                <h4>Tailwind</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="other-skills">
                    <h3>other skills</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon " />
                            <div>
                                <h4>Node</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon " />
                            <div>
                                <h4>Spring Bot</h4>
                                <small className="text-light">
                                    Intermidiet
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon " />
                            <div>
                                <h4>pythone</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon " />
                            <div>
                                <h4>sql</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
