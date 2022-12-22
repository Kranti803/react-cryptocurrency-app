import React from "react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>CryptoDC</h2>
        <aside>
          <h4>Social Media</h4>
          <div>
            <a href="">
              <AiFillFacebook />
            </a>
            <a href="">
              <AiFillTwitterSquare />
            </a>
            <a href="">
              <AiFillInstagram />
            </a>
            <a href="">
              <AiFillYoutube />
            </a>
          </div>
        </aside>
      </div>
      <p>&copy;All Rights Reserved - 2022 </p>
    </footer>
  );
};

export default Footer;
