import React from "react";
import "./styles.css";

function Contacts() {
  return (
    <div className="contacts-div text-center mb-3" id="contactMe">
      <h4 className="contacts-line text-center">contacts</h4>
      <p className="address" text-center col-lg-12 col-12>
        315 5th Ave New York, NY 10016
      </p>
      <a
        className="address"
        text-center
        col-lg-12
        col-12
        href="tel:646-640-6745"
      >
        +1(646)640-6745
      </a>
      <br />
      <a
        className="address"
        col-lg-12
        col-12
        href="mailto:c.tattooing.7@gmail.com"
        target="_blank"
      >
        c.tattooing.7@gmail.com
      </a>
      <br />
      <br />
      <a
        className="contact-link text-dark"
        col-lg-12
        col-12
        href="https://www.instagram.com/c_tattooing_/?igshid=e9mflbmxbpnb"
        target="_blank"
      >
        <i class="ri-instagram-line"></i>
      </a>
      <p className="copywrites">2020 © Cohen Polina</p>
    </div>
  );
}

export default Contacts;
