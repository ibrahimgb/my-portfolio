import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import IMG1 from "../../assets/img1.png";
import TCF from "../../assets/tcf.jpg";
import PFE from "../../assets/pfe.jpg";

const experience = [
    {
        id: 0,
        image: null,//TCF,
        title: "Dockflow : Supply Chain Management Software ’SaaS’ ",
        position:"junior software engineer intern",
        period:"October - current",
        discription:
            "Dockflow is a combination of tools and solutions for maritime logistics digitalization, it helps businesses collaborating and being in touch with data sources that have relation with their shipments. As a software engineer intern at dockflow I contributed in :",
        demo: null,
        bullet_points:["Working closely with cofounders to test and build new fetchers that help improve the web application and make it accessible for people not used to technology.",
                        "Develops functionality in the Dockflow platform that will make onboarding of new customers easier and more efficient.",
                        "Debug fix customer-reported issues that are escalated to 2nd-tier technical support.",
                        "Working on daily tasks to improve the frontend application features and implementing changes to legacy code to make it easy to maintain."],
        technologies:["Javascript", "Typescript", "Angular", , "HTML", "CSS" ,"SCSS" , "Elastic Search","Microservices", "Gitlab", "NestJS" , "Docker"],
    },
    {
        id: 1,
        image: null,//PFE,
        title: "RIIR : Recherche en Informatique Industrielle et Reseaux",
        position:"Research internship",
        period:"Spring 2022",
        discription:
            "As a research intern for my master's thesis, The objective aims to develop a module that allows an indoor robot to avoid all obstacles. without human intervention, in a poorly controlled environment, and in the presence of mobile obstacles using neural networks. It will be possible to synchronize with other robots in a dynamic environment using a multi-agent system.",
        demo: null,
        bullet_points:[
            "Develop offline mission planning, path/trajectory planning, and adaptation to dynamic events using deep reinforcement learning approaches.",
            "Building a test bench to evaluate the performance of multiple machine learning models.",
            "Build prototypes and an electronic setup for a mobile robot."
        ],

        technologies:["Pycharm","matplotlib","numpy","keras","Python 3.9","Anaconda3", "Q-Learning", "neural networks", "robotics","mobile navigation"],
    },
    {
        id: 2,
        image: null,//PFE,
        title: "NANO Consulting: IT Services and IT Consulting",
        position:"Junior Frontend Developer",
        period:"June to October 2021",
        discription:
            "As a front-end engineer, I was responsible for developing the user interface of a web application. I was responsible for creating the look and feel of the client application, as well as ensuring that it is user-friendly and mobile-responsive. starting from a wireframe and a Figma file to a working React application.",
        demo: null,
        bullet_points:["Working directly with 2 clients Teaming up with a team of 3 developers Delivering clean scalable code.",
                        "Find solutions to the client’s needs.",
                        "Sketching modern apps Building and testing our application."
                        ],
        technologies:["Html", "Css", "Javascript", "React", "Node", "Npm", "Figma"],
    },
];

const Experience = () => {
    return (
        <section id="experience">
            <h5>what is my experience?</h5>
            <h2>my experience</h2>
            <div className="container portfolio__container">
                {experience.map((item, index) => {
                    return (
                        <article key={index} className="portfolio__item">
                            <div className="portfolio__item-btnss portfolio__item__discription ">
                                <h3 id="experience__item__title">
                                    {item.title}
                                </h3>
                                <div className="sub_title">
                                <h4 className="position">{item.position}</h4>
                                <p className="date">{item.period}</p>
                                </div>
                                <p>{item.discription}</p>
                                <ul className="bullet_points">{
                                    item.bullet_points.map((point)=>{
                                        return (<li>◦ {point}</li>)
                                    })
                                    }
                                </ul>
                                <div className="btnse tags">
                                    {item.technologies.slice(0).reverse().map((teq)=>{
                                        return (
                                        <div
                                            className="chips-tag right"
                                            target="_blank"
                                        >
                                            {teq}
                                        </div>)
                                    })   
                                    }
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

export default Experience;
