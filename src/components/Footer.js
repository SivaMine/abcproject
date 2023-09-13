import React from "react";
import "./Footer.css";
import Marquee from "react-fast-marquee";
import { Container, Col, Row } from "react-bootstrap";
import img1 from "./pages/Footerimg/1.png";
import img2 from "./pages/Footerimg/2.png";
import img3 from "./pages/Footerimg/3.png";
import img4 from "./pages/Footerimg/4.png";
import img5 from "./pages/Footerimg/5.png";
import img6 from "./pages/Footerimg/6.png";
import img7 from "./pages/Footerimg/7.png";
import img8 from "./pages/Footerimg/8.png";
import img9 from "./pages/Footerimg/9.png";
import img10 from "./pages/Footerimg/10.png";
import img11 from "./pages/Footerimg/11.png";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
function Footer() {
  return (
    <div className="footer-div-1">
      <Container>
        <Row className="footer-row-1">
          <Col className="footer-col-1" lg={12}>
            <hr />
            <h1 className="footer-head1">OUR ASSOCIATES</h1>
          </Col>
        </Row>
      </Container>
      <Container className="footer-container-2">
        <Row>
          <Col className="footer-col-2" lg={12}>
            <Marquee pauseOnHover={true} speed={200}>
              <img src={img1} alt="" className="marq-img" />
              <img src={img2} alt="" className="marq-img" />
              <img src={img3} alt="" className="marq-img" />
              <img src={img4} alt="" className="marq-img" />
              <img src={img5} alt="" className="marq-img" />
              <img src={img6} alt="" className="marq-img" />
              <img src={img7} alt="" className="marq-img" />
              <img src={img8} alt="" className="marq-img" />
              <img src={img9} alt="" className="marq-img" />
              <img src={img10} alt="" className="marq-img" />
              <img src={img11} alt="" className="marq-img" />
            </Marquee>
          </Col>
        </Row>
      </Container>
      <Container className="footer-container-3">
        <Row className="footer-row-3">
          <Col className="footer-col-3" lg={5}>
            <h2 className="footer-head2">ADDRESS</h2>
            <h4 className="footer-head3">
              ABC Systems Private Limited,Site No:123, XYZ Nagar, Poonamallee ,
              Chennai,600 056 ,Tamilnadu,India
            </h4>
            <p className="footer-para-1">
              <FiPhoneCall className="footer-icon-1" />
              <span className="footer-span-1">(+91) 12345 56789 / 12123</span>
            </p>
            <p className="footer-para-1">
              <FiMail className="footer-icon-1" />
              <span className="footer-span-1"> info@abcsystems.co.in</span>
            </p>
          </Col>
          <Col lg={7} className="footer-col-4">
            <iframe
              className="footer-frame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31094.683659792747!2d80.09323039192297!3d13.046143435654727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261c44a4ce607%3A0x749b23fde024eab0!2sPoonamallee%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1686756010903!5m2!1sen!2sin"
            ></iframe>
          </Col>
        </Row>
      </Container>

      <Row className="footer-row-4">
        <Col lg={12}>
          <p className="footer-para-2">
            Copyright © 2016 - 2022 ABC Systems. all rights reserved.
          </p>
        </Col>
      </Row>
    </div>
  );
}
export default Footer;
