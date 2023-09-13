import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import img1 from "./Infrastructureimg/img1.jpg";
import img2 from "./Infrastructureimg/img2.jpg";
import img3 from "./Infrastructureimg/img3.jpg";
import img4 from "./Infrastructureimg/img4.jpg";
import img5 from "./Infrastructureimg/img5.jpg";
import img6 from "./Infrastructureimg/img6.jpg";
import img7 from "./Infrastructureimg/img7.jpg";
import img8 from "./Infrastructureimg/img8.jpg";
import img9 from "./Infrastructureimg/img9.jpg";
import "./Infrastructure.css";
function Infrastructure() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="divis1" lg={4}>
            <h1 className="hea1">INFRASTRUCTURE</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="divis2">
          <Col lg={4}>
            <img src={img1} alt="" className="i1" />
            <figcaption className="cap1">UNIT1</figcaption>
          </Col>
          <Col lg={4}>
            <img src={img2} alt="" className="i2" />
            <figcaption className="cap1">UNIT2</figcaption>
          </Col>
          <Col lg={4}>
            <img src={img3} alt="" className="i3" />
            <figcaption className="cap1">UNIT3</figcaption>
          </Col>
        </Row>
      </Container>
      <Container className="infra-container-1">
        <Row>
          <Col className="col-md-12 divis3">
            <p className="pa1">
              We hold a corporate office about 4000 sq.ft hosting the design and
              development team.
            </p>
            <p className="pa1">
              A centralized and equipped project engineering division to provide
              system engineering solutions to the domestic as well as
              international projects.
            </p>
            <p className="pa1">
              A well organized panel shop about 13,000 sq.ft. for engineering of
              Electrical, Control & Instrumentation panels and Testing facility
              for Conducting FAT
            </p>
            <p className="pa1">
              A division with emphasis on demo and training facilities for the
              service oriented support, life cycle businesses and technology
              up-gradation to meet the global demands
            </p>
            <p className="pa1">
              A dedicated Wire Harnessing Center with state of the art
              equipments.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="divis4">
          <Col lg={4}>
            <img src={img4} alt="" className="i4" />
          </Col>
          <Col lg={4}>
            <img src={img5} alt="" className="i5" />
          </Col>
          <Col lg={4}>
            <img src={img6} alt="" className="i6" />
          </Col>
        </Row>
      </Container>
      <Container className="infra-container-2">
        <Row className="divis5">
          <Col lg={4}>
            <img src={img7} alt="" className="i7" />
          </Col>
          <Col lg={4}>
            <img src={img8} alt="" className="i8" />
          </Col>
          <Col lg={4}>
            <img src={img9} alt="" className="i9" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Infrastructure;
