import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.png";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "todo-List",
        github: "https://github.com/ibrahimgb/todo-List",
        demo: "https://github.com",
    },
    {
        id: 2,
        image: IMG1,
        title: "finansial visualisation",
        github: "https://github.com",
        demo: "https://github.com",
    },
    {
        id: 3,
        image: IMG1,
        title: "Weather App",
        demo: "demo",
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
                            <div className="portfolio__item-img">
                                <img src={item.image} alt={item.title}></img>
                            </div>
                            <h3>{item.title}</h3>
                            <div className="portfolio__item-btns">
                                {item.github && (
                                    <a
                                        href={item.github}
                                        className="btn"
                                        target="_blank"
                                    >
                                        Github
                                    </a>
                                )}
                                <a
                                    href={item.demo}
                                    className="btn btn-primary"
                                    target="_blank"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
