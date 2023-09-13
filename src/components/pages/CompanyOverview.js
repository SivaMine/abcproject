import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./CompanyOverviewimg/innovation.jpeg";
import img2 from "./CompanyOverviewimg/img2.jpg";
import img3 from "./CompanyOverviewimg/img3.jpg";
import { DiAptana } from "react-icons/di";
import { CiDeliveryTruck, CiVirus } from "react-icons/ci";
import { CiDatabase, CiDesktop } from "react-icons/ci";
import { FiZap, FiShield } from "react-icons/fi";
import { ImTerminal } from "react-icons/im";
import "./CompanyOverview.css";
function CompanyOverview() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="company-ov-div1" lg={6}>
            <img src={img1} alt="ino" className="company-ov-img1" />
          </Col>
          <Col className="company-ov-div2" lg={6}>
            <h1 className="heading1">
              <span className="heading1-sub">Automation</span> Competence
            </h1>
            <p className="para1">
              Our business is to help your business achieve manufacturing
              excellence. We work continuously to bring you the latest thinking
              in automation technology, enabling you to operate more quickly,
              more effectively and more smartly than our competitors.
              <br />
              <br /> Products & solutions you can rely on, delivery when you
              want it and answers when you need them. As a manufacturer of
              automation control panels and channel partner to leading brands in
              automation products, we understand the essence of quality, that
              underpins everything that we do: in product identification and
              manufacturing, in systems and support, in delivery and after -
              sales service.
            </p>
            <div>
              <h1 className="heading2">
                <span className="heading2-sub1">14</span>
                <span className="heading2-sub2">&gt;500+</span>
                <span className="heading2-sub3">100%</span>
              </h1>
              <p className="para2">
                <span className="para2-sub1">Year of Experience</span>
                <span className="para2-sub2">Happy Clients</span>
                <span className="para2-sub3">Satisfaction</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="company-ov-container1">
        <Row>
          <Col className="company-ov-div3" lg={6}>
            <h1 className="heading3">
              Our business is
              <span className="heading3-sub"> Machine Automation</span>
            </h1>
            <p className="para3">
              Nobody understands your business as you do: that's why we will not
              tell you what you should or shouldn't do. But we would like to
              match our innovative resource in sensing, motion and control
              automation technology to help you in develop better machines.
            </p>
            <img src={img2} alt="" className="company-ov-img2" />
            <p className="para4">
              Choosing precisely the right system for your application can make
              the difference, enabling you to design and build machines that do
              more - for longer.
            </p>
          </Col>
          <Col className="company-ov-div4" lg={6}>
            <p className="para5">
              Machines that are well priced, functionally, innovative, produced
              with zero defects & with complete reliability will deliver
              exceptional benefits to your customers thus increasing your
              competitive edge
            </p>
            <img src={img3} alt="" className="company-ov-img3" />
            <p className="para6">
              Our application engineers always strive to take one step at a
              time, can even be small one - adding extra functionality to a
              sensor or a PLC: or it can be much bigger one- developing together
              with a SCADA based software solutions
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="company-ov-container2">
        <Row>
          <Col className="company-ov-div5" lg={12}>
            <h1 className="heading4 ">
              Making <span className="heading4-sub">Innovation</span> Happen
            </h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="company-ov-media1">
          <Col className="company-ov-div6" lg={2}>
            <div className="company-ov-div7">
              <span className="company-ov-span1">
                <DiAptana className="company-ov-icon1" />
              </span>

              <h4 className="company-ov-head1">Industrial Components</h4>
            </div>
          </Col>
          <Col className="company-ov-div6" lg={2}>
            <div className="company-ov-div7">
              <span className="company-ov-span1">
                <CiVirus className="company-ov-icon1" />
              </span>

              <h4 className="company-ov-head1">Automation Systems</h4>
            </div>
          </Col>
          <Col className="company-ov-div6" lg={2}>
            <div className="company-ov-div7">
              <span className="company-ov-span1">
                <FiShield className="company-ov-icon1" />
              </span>

              <h4 className="company-ov-head1">Sensing & Safety</h4>
            </div>
          </Col>
          <Col className="company-ov-div6" lg={1}>
            <div className="company-ov-div7">
              <span className="company-ov-span1">
                <FiZap className="company-ov-icon1" />
              </span>

              <h4 className="company-ov-head1">Thyristor Power Controller</h4>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="company-ov-container3">
        <Row className="company-ov-media1">
          <Col className="company-ov-div8" lg={2}>
            <div className="company-ov-div7">
              <span className="company-ov-span1">
                <CiDeliveryTruck className="company-ov-icon1" />
              </span>

              <h4 className="company-ov-head1">Motion & Drive</h4>
            </div>
          </Col>
          <Col className="company-ov-div8" lg={2}>
            <div className="company-ov-div7">
              <span className="company-ov-span1">
                <CiDesktop className="company-ov-icon1" />
              </span>

              <h4 className="company-ov-head1">Scada Systems</h4>
            </div>
          </Col>
          <Col className="company-ov-div8" lg={2}>
            <div className="company-ov-div7">
              <span className="company-ov-span1">
                <CiDatabase className="company-ov-icon1" />
              </span>

              <h4 className="company-ov-head1">Engineered Systems</h4>
            </div>
          </Col>
          <Col className="company-ov-div8" lg={1}>
            <div className="company-ov-div7">
              <span className="company-ov-span1">
                <ImTerminal className="company-ov-icon1" />
              </span>

              <h4 className="company-ov-head1">Software & Core Training</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default CompanyOverview;
