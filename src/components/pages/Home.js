import React, { useState } from "react";
import BackgroundSlider from "./BackgroundSlider";
import BSlider from "./BSlider";
import img1 from "./Homeimg/Hugging.webp";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import img2 from "./Homeimg/automation_projects.jpg";

import img3 from "./Homeimg/training.jpg";
import img4 from "./Homeimg/industrial_application_software.jpg";
import img5 from "./Homeimg/industrial_panels.jpg";
import img6 from "./Homeimg/amc.jpg";

function Home() {
  return (
    <div>
      <BSlider />
      <Container>
        <Row className="home-row-1">
          <Col lg={12} className="home-col-1">
            <img src={img1} alt="" className="home-img-1" />
          </Col>
        </Row>
      </Container>
      <Container className="home-container-2">
        <Row className="home-row-2">
          <Col lg={12} className="home-col-2">
            <h3 className="home-head-1">
              Emering Industrial Automation Solution
              <br />
              Provider Across Asia
            </h3>
            <br />
            <h2 className="home-head-2">
              What We <span className="home-span-1">Do</span>
            </h2>
          </Col>
        </Row>
      </Container>

      <Container className="home-container-3">
        <Row className="home-row-4">
          <Col lg={3} className="home-col-4">
            <div className="home-container-img">
              <div className="home-img">
                <img src={img2} alt="" />
              </div>
              <div className="home-head-3">
                <h4>Automation Projects</h4>
              </div>
            </div>
            <br />
            <div className="home-container-img">
              <div className="home-img">
                <img src={img3} alt="" />
              </div>
              <div className="home-head-3">
                <h4 style={{ fontSize: "20px" }}>Software & PLC Training</h4>
              </div>
            </div>
          </Col>
          <br />
          <Col lg={6} className="home-col-5">
            <div className="home-container-img-4">
              <div className="home-img-4">
                <img src={img4} alt="" />
              </div>
              <div className="home-head-4">
                <h4>Industrial Application Software</h4>
              </div>
            </div>
          </Col>
          <Col lg={3} className="home-col-4">
            <div className="home-container-img">
              <div className="home-img">
                <img src={img5} alt="" />
              </div>
              <div className="home-head-3">
                <h4>Industrial Panels</h4>
              </div>
            </div>
            <br />
            <div className="home-container-img">
              <div className="home-img">
                <img src={img6} alt="" />
              </div>
              <div className="home-head-3">
                <h4>AWC</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
