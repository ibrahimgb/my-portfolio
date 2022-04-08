import React from "react";
import "./testimoniales.css";
import avatar from "../../assets/avatar.jpeg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialsList = [
    {
        id: 1,
        image: avatar,
        name: "lakdar lokil",
        review: "would be really great if you could start creative web development series on youtube, like deconstruct awwwards websites. would be really great if you could start creative web development",
    },
    {
        id: 2,
        image: avatar,
        name: "lakdar lokil",
        review: "would be really great if you could start creative web development series on youtube, like deconstruct awwwards websites. would be really great if you could start creative web development",
    },
    {
        id: 3,
        image: avatar,
        name: "lakdar lokil",
        review: "would be really great if you could start creative web development series on youtube, like deconstruct awwwards websites. would be really great if you could start creative web development",
    },
];

const Testimoniales = () => {
    return (
        <section id="testimoniales">
            <h5>review from Clients</h5>
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
