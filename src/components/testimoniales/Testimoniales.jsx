import React from "react";
import "./testimoniales.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import LakhdarLoukil from "../../assets/LakhdarLoukil.jpeg";
import YahiaLebbah from "../../assets/YahiaLebbah.jpeg";
import BouabdellahKechar from "../../assets/BouabdellahKechar.jpeg";
import CV from "../../assets/CV.pdf";
import LL from "../../assets/Recommendation Letter-Goual-Belhamidi.pdf";
import YL from "../../assets/YL.pdf";
import KB from "../../assets/KB.pdf";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialsList = [
    {
        id: 1,
        image: LakhdarLoukil,
        name: "Lakhdar Loukil",
        letter: LL,
        review: "I take great pleasure in recommending Guoual Belhamidi Ibrahim that I had as a student for more than two years. in Operating Systems class for the 3rd year bachelor’s degree and in Architecture and Parallel Programming class in the 2nd-year master’s degree. It is during this time that I had opportunities to assess his capabilities. The candidate has shown great confidence in these two fundamental computer science topics. I strongly believe that his solid knowledge of the fundamentals, his remarkable ability to apply the theoretical concepts he has learned to practical cases, and his great motivation to keep up with the state-of-the-art knowledge in his field of study will help him in the field he is pursuing. I can proudly and without any hesitation rank him among the top 10% of students in his class.",
        linkedin: "https://www.linkedin.com/in/lakhdar-loukil-b3368150/",
    },
    {
        id: 2,
        image: YahiaLebbah,
        name: "Yahia Lebbah",
        letter: YL,
        review: " I have known Ibrahim GUOUAL BELHAMIDI as a graduate student in ' Advanced Algorithms and complexity ' and Web development courses at the department of computer science , University Oran1 , Algeria . While being a student of mine , I can say with confidence that he was a serious student . He was committed to his study , and his dedication and high standards in completing whatever was required to succeed , was remarkable . His skills and hard work made him in the top 10 % of the class students .",
        linkedin: "https://www.linkedin.com/in/yahia-lebbah-3bb9898/",
    },
    {
        id: 3,
        image: BouabdellahKechar,
        name: "Bouabdellah Kechar",
        letter: KB,
        review: "I knew Mr. Ibrahim Guoual Belhamidi as a teacher of the 'Network Architecture' module in Master 1 .  Appreciations: He is among the best students (the first 20%) of his promotion and he stands out for certain appreciable qualities such as attendance, excellent human relations, mastery of his field of competence (Networks and distributed systems) and autonomy.  I would also like to highlight his perfect mastery of computer tools, particularly in terms of development and simulation environments dedicated to computer networks and systems.  I strongly recommend him to continue his higher education in order to improve his intellectual capacities to advance well in his academic and professional career.",
        linkedin: "https://www.linkedin.com/in/bkechar/",
    },
];

const Testimoniales = () => {
    return (
        <section id="testimoniales">
            <h5>from my professors </h5>
            <h2>testimonials</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className="container testimoniales__container"
            >
                {testimonialsList.map((testimonial, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={testimonial.image} alt="avatar1" />
                            </div>
                            <h5 className="client__name">{testimonial.name}</h5>
                            <small className="client__review">
                                {testimonial.review}
                            </small>

                            <div>
                                {
                                    <a
                                        href={testimonial.letter}
                                        className="btn gap btn-primary"
                                        target="_blank"
                                    >
                                        Recommendation Letter
                                    </a>
                                }
                                {
                                    <a
                                        href={testimonial.linkedin}
                                        className="btn gap"
                                        target="_blank"
                                    >
                                        Linkedin
                                    </a>
                                }
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimoniales;
