import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.png";
import TCF from "../../assets/tcf.jpg";
import PFE from "../../assets/pfe.jpg";
import towerFarms from "../../assets/tower-farms-home.webp"
import LMS from "../../assets/LMS.png"

const data = [
    {
        id: 10,
        image: towerFarms,
        title: "Automated aeroponic tower system",
        github: "https://github.com/ibrahimgb/aeroponic-tower",
        discription:
            "Aeroponics is the process of growing plants in the air without soil. The basic principle of aeroponic growing is to grow plants suspended in a closed or semi-closed environment by spraying the plant's dangling roots and lower stem with a nutrient-rich water solution. this project is currently a work in progress and will be open-source after it is finished the solution I am creating is a monitoring system to track the temperature and humidity and  Ultraviolet Sensor 'Sunlight intensity detection ' and the goal of it is to insure the optimal environment for maximum productivity!",
        demo: null,
    },
    {
        id: 0,
        image: LMS,
        title: "Library management system",
        github: null,
        discription:
            "the library management system is an app created with the goal of switching from paper-based administration work to all digitized systems, which will minimize human errors, and make managing the library far easier. the application is created with React and NestJS in a teamwork.",
        demo: "https://library.americancorneroran.org/",
    },
    {
        id: 1,
        image: TCF,
        title: "Tcf Quiz Exam",
        github: "https://github.com/ibrahimgb/tcf-quiz-exam",
        discription:
            "Attempt the online Tcf Mock test. Reading Writing language structure. to find out the Tcf score (tcf stands for France language knowledge test) built with react, redux toolkit and Firebase",
        demo: null,
    },
    {
        id: 2,
        image: PFE,
        title: "Mes-papiers",
        github: "https://github.com/ibrahimgb/pfe",
        discription:
            "Mes-papiers is a Mobile application for managing administrative files with localization, this is my final year project for my bachelor’s degree Apr 2020 – Jul 2020 Built using android studio, it uses SQLite to save data on the phone and googles map API for localization.",
        demo: null,
    },
    {
        id: 3,
        image: null,
        title: "Robot Navigation Using Deep Reinforcement Learning",
        github: " https://github.com/ibrahimgb/robot-navigation-using-deep-reinforcement-learning",
        discription:
            "Deep Reinforcement Learning for mobile robot navigation, a robot learns to navigate to a random goal point from random moves to adopting a strategy, in a simulated maze environment while avoiding dynamic obstacles. tools i used: Pycharm, matplotlib, numpy, keras, Anaconda3.",
        demo: null,
    },
    {
        id: 4,
        image: null,
        title: "PARALLEL-DENSE-MATRIX-MATRIX-MULTIPLICATION",
        discription:
            "CPU testbench, test performance of the CPU in sequential and in parallel using multithreading. Tools I Used: Linux, GNU Compiler, Pthread, VS Code. ",
        github: "https://github.com/ibrahimgb/PARALLEL-DENSE-MATRIX-MATRIX-MULTIPLICATION",
        demo: null,
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>Noteworthy Projects</h5>
            <h2>Some Things I’ve Built</h2>
            <div className="container portfolio__container">
                {data.map((item, index) => {
                    return (
                        <article key={index} className="portfolio__item">
                            <div className="portfolio__item-btnss portfolio__item__discription ">
                                <h3 className="portfolio__item__title">
                                    {item.title}
                                </h3>
                                <p>{item.discription}</p>
                                <div className="btnse">
                                    {item.github && (
                                        <a
                                            href={item.github}
                                            className="btn right"
                                            target="_blank"
                                        >
                                            Github
                                        </a>
                                    )}
                                    {item.demo && (
                                        <a
                                            href={item.demo}
                                            className="btn btn-primary"
                                            target="_blank"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                            {item.image && (
                                <div className="portfolio__item-img">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                    ></img>
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
