import React from "react";
import "./Header.css";
import { BsLinkedin, BsGithub, BsFacebook, BsYoutube } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.facebook.com/khoa.tan.1654/" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://github.com/NgoTanKhoa21042001" target="_blank">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/khoa-ng%C3%B4-066544229/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://www.youtube.com/" target="_blank">
        <BsYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
