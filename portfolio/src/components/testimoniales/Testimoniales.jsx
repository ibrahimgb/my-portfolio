import React from "react";
import "./testimoniales.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialsList = [
    {
        id: 1,
        image: "https://media-exp1.licdn.com/dms/image/C4E03AQFaHv2KylkDzA/profile-displayphoto-shrink_400_400/0/1595977214183?e=1654732800&v=beta&t=-AT6xHu0V5rjzty8cKiWRoR5YEtERYD1xYkwbQyDLUA",
        name: "Bouabdellah Kechar",
        review: "would be really great if you could start creative web development series on youtube, like deconstruct awwwards websites. would be really great if you could start creative web development",
        linkedin: "https://www.linkedin.com/in/bkechar/",
    },
    {
        id: 2,
        image: "https://media-exp1.licdn.com/dms/image/C4E03AQGTzPQPCZR8wg/profile-displayphoto-shrink_400_400/0/1517741101572?e=1654732800&v=beta&t=eQQJd0i-ycfDT7rihDw3Pupgf4Vx2se6dTdoS6eDdIY",
        name: "Yahia Lebbah",
        review: "would be really great if you could start creative web development series on youtube, like deconstruct awwwards websites. would be really great if you could start creative web development",
        linkedin: "https://www.linkedin.com/in/yahia-lebbah-3bb9898/",
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
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimoniales;
