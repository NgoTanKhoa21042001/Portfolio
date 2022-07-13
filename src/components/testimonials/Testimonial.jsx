import React from "react";
import "./Testimonial.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus obcaecati ipsa unde saepe quas excepturi illum fuga est?
            At impedit tempore non ipsa nesciunt tempora omnis porro
            reprehenderit nisi perferendis!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT2} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus obcaecati ipsa unde saepe quas excepturi illum fuga est?
            At impedit tempore non ipsa nesciunt tempora omnis porro
            reprehenderit nisi perferendis!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT3} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus obcaecati ipsa unde saepe quas excepturi illum fuga est?
            At impedit tempore non ipsa nesciunt tempora omnis porro
            reprehenderit nisi perferendis!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT4} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus obcaecati ipsa unde saepe quas excepturi illum fuga est?
            At impedit tempore non ipsa nesciunt tempora omnis porro
            reprehenderit nisi perferendis!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
