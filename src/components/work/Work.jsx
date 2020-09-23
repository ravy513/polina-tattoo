import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./styles.css";
import oneImg from "../../images/1.JPG";
import twoImg from "../../images/2.JPG";
import threeImg from "../../images/3.JPG";
import fourImg from "../../images/4.JPG";
import fiveImg from "../../images/5.JPG";
import sixImg from "../../images/6.JPG";
import sevenImg from "../../images/7.JPG";
import eightImg from "../../images/8.JPG";
import nineImg from "../../images/9.JPG";
import tenImg from "../../images/10.JPG";
import elImg from "../../images/11.JPG";
import twlImg from "../../images/12.JPG";
import trtnImg from "../../images/13.JPG";
import thrtnImg from "../../images/14.JPG";
import fivtImg from "../../images/15.JPG";

function Work() {
  return (
    <>
      <h4 id="workSection" className="my-work text-center">
        my work
      </h4>
      <Carousel
        className="carousel-laptop px-lg-5 px-2"
        infinite
        arrowLeft={
          <i
            className="ri-arrow-left-s-line icon-example"
            name="arrow-left"
          ></i>
        }
        arrowRight={
          <i
            className="ri-arrow-right-s-line icon-example"
            name="arrow-right"
          ></i>
        }
        addArrowClickHandler
        arrows
        slidesPerPage={3}
        offset={5}
        centered
        autoPlay={3000}
        breakpoints={{
          1200: {
            // these props will be applied when screen width is less than 1000px
            slidesPerPage: 2,
            arrows: true,
          },
          800: {
            slidesPerPage: 1,
            arrows: true,
            offset: 20,
          },
        }}
      >
        <img className="carousel-img" src={oneImg} />
        <img className="carousel-img" src={twoImg} />
        <img className="carousel-img" src={threeImg} />
        <img className="carousel-img" src={fourImg} />
        <img className="carousel-img" src={fiveImg} />
        <img className="carousel-img" src={sixImg} />
        <img className="carousel-img" src={sevenImg} />
        <img className="carousel-img" src={eightImg} />

        <img className="carousel-img" src={nineImg} />
        <img className="carousel-img" src={tenImg} />
        <img className="carousel-img" src={elImg} />
        <img className="carousel-img" src={twlImg} />
        <img className="carousel-img" src={trtnImg} />
        <img className="carousel-img" src={thrtnImg} />
        <img className="carousel-img" src={fivtImg} />
      </Carousel>
    </>
  );
}

export default Work;
