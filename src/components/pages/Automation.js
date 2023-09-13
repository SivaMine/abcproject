import React from "react";
import "./Automation.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./Automationimg/1.jpeg";
import img2 from "./Automationimg/2.png";
import img3 from "./Automationimg/3.png";
import img4 from "./Automationimg/4.png";
import img5 from "./Automationimg/5.png";
import img6 from "./Automationimg/6.jpg";
function Automation() {
  return (
    <div>
      <Container>
        <Row className="autorow-1">
          <Col className="autocol-1" lg={3}>
            <img src={img1} alt="" className="autoimg1" />
            <img src={img2} alt="" className="autoimg1" />
            <img src={img3} alt="" className="autoimg1" />
            <img src={img4} alt="" className="autoimg1" />
            <img src={img5} alt="" className="autoimg1" />
            <img src={img6} alt="" className="autoimg1" />
          </Col>
          <Col className="autocol-2" lg={6}>
            <h1 className="auto-head1">PLC PROGRAMMER</h1>
            <h1 className="auto-head2">INDUSTRIAL AUTOMATION</h1>
            <ul className="autoul-1">
              <li className="autoli-1">INDUSTRIAL AUTOMATION</li>
              <li className="autoli-1">
                FIELD DEVICES IN INDUSTRIAL AUTOMATION
              </li>
              <li className="autoli-1">PLC-PROGRAMMABLE LOGIC CONTROLLER </li>
              <ul className="autoul-2">
                <li className="autoli-2">Siemens</li>
                <li className="autoli-2">Schneider</li>
                <li className="autoli-2">Mitsubishi</li>
              </ul>

              <li className="autoli-1">SCADA</li>
              <ul className="autoul-2">
                <li className="autoli-2">Siemens</li>
                <li className="autoli-2">WonderWare Intouch</li>
              </ul>
              <li className="autoli-1">HMI-HUMAN MACHINE INTERFACE</li>
              <li className="autoli-1">SCADA Vs HMI</li>
              <li className="autoli-1">VFD-VARIABLE FREQUENCY DEIVE</li>
              <li className="autoli-1">
                CONTROL PANEL COMMISSIONING & ERECTION
              </li>
              <li className="autoli-1">PLC TROUBLESHOOTING</li>
              <li className="autoli-1">IoT & IIoT</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Automation;
