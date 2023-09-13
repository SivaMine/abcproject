import React from "react";
import "./M&v.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./M&vimg/mission-vision1.jpg";
import img2 from "./M&vimg/download.jpg";
function Mission() {
  return (
    <div>
      <Container className="mv-container1">
        <Row className="rowmv">
          <Col lg={3}>
            <img src={img1} alt="" className="im1" />
          </Col>
          <Col className="divi1" lg={8}>
            <h3 className="head1">MISSION</h3>
            <p className="par1">
              Our mission is to provide world-class standards and best of
              products and solutions through an unmatched understanding of our
              partner’s business and goals. We are dedicated to crafting total
              systems solutions that benefit both our customers and our
              suppliers, helping all to become more successful. It is our
              continued mission to build value for our partners by achieving
              operational excellence and unrivaled customer satisfaction.
            </p>
            <h3 className="head2">VISSION</h3>
            <p className="par2">
              Our Vission is to go from an entrepreneurial company to an
              enduring, great organization by the end of the decade without
              losing the simplicity and agility of a small company. Our goal is
              to be more significant to our customers and manufacturers combined
              through the strength of our customers’ satisfaction and by
              consistently providing superior systems and service solutions.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="mv-container1">
        <Row>
          <img src={img2} alt="" className="im2" />
        </Row>
      </Container>
    </div>
  );
}
export default Mission;
