import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>khoantgcd191215@fpt.edu.vn</h5>
            <a href="mailto:kakashi21042001@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__icon" />
            <h4>Messenger</h4>
            <h5>ngotankhoaportfolio</h5>
            <a href="https://www.facebook.com/khoa.tan.1654/">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4>WhatsApp</h4>
            <h5>+84 3555 2021</h5>
            <a href="http://api.whatsapp.com">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea
            name="password"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" class="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
