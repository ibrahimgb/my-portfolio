import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.png";
import TCF from "../../assets/tcf.jpg";
import PFE from "../../assets/pfe.jpg";
import towerFarms from "../../assets/tower-farms-home.webp";
import LMS from "../../assets/LMS.png";

const data = [
  {
    id: 11,
    title: "HousingHub",
    github: "https://progaming.monster/WRH541",
    discription:
      "HousingHub is an online platform that enables users to find their ideal apartments or homes. With 360-degree virtual tours available on the website, users can decide on their preferred living space without the need for an in-person visit. This makes the rental process more efficient and convenient for users, this is currently a project under construction for a client.",
    demo: "",
  },
  {
    id: 9,
    image: towerFarms,
    title: "SkyFarms Landing Page",
    github: "https://progaming.monster/WRH541",
    discription:
      "SkyFarms is a groundbreaking method of food production that enables the cultivation of crops in urban areas, promoting sustainable and eco-friendly practices. The technology is designed to optimize space usage and reduce waste, allowing for efficient and productive farming in areas where traditional agriculture methods are not possible. Our website features comprehensive information about SkyFarms, including the technology's key features, benefits, and how it works. We provide real-life examples and case studies of successful SkyFarms installations in urban areas, showcasing the possibilities and benefits of this innovative agricultural approach.",
    demo: "skyfarms.up.railway.app/",
  },
  {
    id: 10,
    image: towerFarms,
    title: "SkyFarms App",
    github: "https://progaming.monster/WFGB1Q",
    discription:
      "SkyFarms Dashboard is an IoT solution for tracking temperature and humidity, as well as the growth of plants. With this dashboard, you can collaborate with your farmers and increase the productivity of your harvest by 30%, while reducing the size needed by 60%. The dashboard is built with Angular, TypeScript, and Angular Material.",
    demo: "app-skyfarms.up.railway.app",
  },
  {
    id: 0,
    image: LMS,
    title: "Library management system",
    github: null,
    discription:
      "the library management system is an app created with the goal of switching from paper-based administration work to all digitized systems, which will minimize human errors, and make managing the library far easier. the application is created with React and NestJS in a teamwork.",
    demo: "https://progaming.monster/F0FQXG",
  },
  {
    id: 1,
    image: TCF,
    title: "Tcf Quiz Exam",
    github: "https://progaming.monster/UZ5H5T",
    discription:
      "Attempt the online Tcf Mock test. Reading Writing language structure. to find out the Tcf score (tcf stands for France language knowledge test) built with react, redux toolkit and Firebase",
    demo: null,
  },
  {
    id: 2,
    image: PFE,
    title: "Mes-papiers",
    github: "https://progaming.monster/0HBABY",
    discription:
      "Mes-papiers is a Mobile application for managing administrative files with localization, this is my final year project for my bachelor’s degree Apr 2020 – Jul 2020 Built using android studio, it uses SQLite to save data on the phone and googles map API for localization.",
    demo: null,
  },
  {
    id: 3,
    image: null,
    title: "Robot Navigation Using Deep Reinforcement Learning",
    github: "https://progaming.monster/JFO3TG",
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
    github: "https://progaming.monster/83NID0",
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
                <h3 className="portfolio__item__title">{item.title}</h3>
                <p>{item.discription}</p>
                <div className="btnse">
                  {item.github && (
                    <a href={item.github} className="btn right" target="_blank">
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
                  <img src={item.image} alt={item.title}></img>
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
