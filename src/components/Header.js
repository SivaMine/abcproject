import React from "react";
import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";

import Rout from "../Rout";
import {
  BsTelephoneXFill,
  BsStopwatchFill,
  BsTelegram,
  BsTrophyFill,
} from "react-icons/bs";
import img1 from "./pages/Headerimg/smile.png";
import Marquee from "react-fast-marquee";
function Header() {
  return (
    <div>
      <Container className="header-container-1">
        <Row className="headerrow1">
          <Col className="headercol1" lg={4}>
            <img src={img1} alt="" className="headerimg1" />
          </Col>
          <Col className="header-col-2" lg={4}>
            <h6 className="header-head-1">
              <span className="header-span-1">
                <BsStopwatchFill className="icon-clock1" />
              </span>
              Mon-Sat Time: 9:30AM -- 6:30PM
            </h6>
            <h6 className="header-head-2">
              <span className="header-span-1">
                <BsTelephoneXFill className="icon-phone1" />
              </span>
              90000 XXXXX
            </h6>
            <h6 className="header-head-3">
              <span className="header-span-1">
                <BsTelegram className="icon-post1" />
              </span>
              info@abcsystems.co.in
            </h6>
          </Col>
        </Row>
      </Container>
      <Container className="header-container-2">
        <Row className="headerrow2">
          <Col className="headercol3" lg={12}>
            <Marquee className="word-wrap">
              <BsTrophyFill />
              ABC SYSTEM PRIVATE LIMITED PLC TRAINING & SOFTWARE TRAINING
              PROVIDING CORE COMPANY
              <BsTrophyFill />
            </Marquee>
          </Col>
        </Row>
      </Container>
      <Rout />
    </div>
  );
}
export default Header;
