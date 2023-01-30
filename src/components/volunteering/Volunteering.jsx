import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import IMG1 from "../../assets/img1.png";
import TCF from "../../assets/tcf.jpg";
import PFE from "../../assets/pfe.jpg";

const volunteering = [
    {
        id: 0,
        image: null,//TCF,
        title: "American Corner Oran",
        position:"IT Volunteer",
        period:"September - current",
        discription:
            "The ACO is a cultural center sponsored by the United States Department that offers activities that provide the opportunity to promote English Language by using ESL collection from the corner, videos, and audio. The ACO offers also and develops most of the cultural programs, workshops, and interactive activities.",
        demo: null,
        bullet_points:["My roles are to create software and switch from paper-based work to all digitized systems, Such as Sign in-app using React NestJS, and Library app and management system (LTS)",
                        "Ensuring and testing the tools and gadgets used in events",
                        "Maintaining the hardware and software of the ACO",
                        "Host all kinds of IT-related events for the members of the ACO (American corner Oran), with over 200 attendees.",],
        technologies:["Javascript", "Typescript", "React", "HTML", "CSS", "React", "React material ui","Github" , "postgres", "NestJS"],
    },
    {
        id: 1,
        image: null,//PFE,
        title: "Organizing Committee of the Mediterranean Games of Oran 2022",
        position:"network engineer volunteer",
        period:"March to July 2022",
        discription:
            "The Mediterranean Games is a multi-sport event organized by the International Committee of Mediterranean Games (CIJM). It is held every four years among athletes from countries bordering the Mediterranean Sea in Africa, Asia, and Europe. my main tasks during my volunteering were:",
        demo: null,
        bullet_points:[
            "Troubleshoot and resolve network issues and implement networking maintenance tasks.",
            "Assisting to Install and configuring networking devices.",
            "Working closely with a multinational team to insure the proper working of the equipment"
        ],

        technologies:["cisco","cisco switch","routers","rj45","LAN","CCNA"],
    },
];

const Volunteering = () => {
    return (
        <section id="experience">
            <h5>am I into volunteering??</h5>
            <h2>me volunteering</h2>
            <div className="container portfolio__container">
                {volunteering.map((item, index) => {
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

export default Volunteering;
