import React, { useState, useEffect } from "react";
import "./BSlider.css";

import HeroSlider, { Slide } from "hero-slider";
import img1 from "./Sliderimg/img1.jpg";
import img2 from "./Sliderimg/img2.jpg";
import img3 from "./Sliderimg/img3.jpeg";
import img4 from "./Sliderimg/img4.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

const BSlider = () => {
  /* const[time,settime]=useState(false);
 const handle=()=>{
  setTimeout(()=>{
    settime(true)
  },3000)
 }*/

  return (
    <div>
      <Row className="bslide-row-1">
        <Col lg={12} className="bslide-col-1">
          <HeroSlider>
            <Slide
              //onMouseEnter={handle}
              background={{
                backgroundImage: `url(${img1})`,
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <Slide
              className="slide"
              background={{
                backgroundImage: `url(${img2})`,
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Slide
              className="slide"
              background={{
                backgroundImage: `url(${img3})`,
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Slide
              className="slide"
              background={{
                backgroundImage: `url(${img4})`,
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Slide>
          </HeroSlider>
        </Col>
      </Row>
    </div>
  );
};
export default BSlider;
