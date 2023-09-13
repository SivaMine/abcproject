import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./Quality/certificate.jpg";
import "./Quality.css";
function Quality() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={8}>
            <div className="divisi1">
              <h1 className="he1">
                <span className="he1-sub">QUALITY</span> POLICY
              </h1>
              <p className="p1">
                Understanding the needs of customers and satisfy them providing
                total solutions, supported by leading edge technology, effective
                quality systems and a performance friendly organization climate
                to ensure continuous improvement
              </p>
            </div>
            <div className="divisi2">
              <h5 className="he2">A passion for quality...</h5>
              <p className="p2">
                Our quality assurance systems is audited and certified by Bureau
                VERITAS and proved to be much more stringent than international
                norms.
              </p>
              <p className="p2">
                We use the knowledge and expertise that we've gained from our
                vast experience in building automation solutions to help our
                customers throughout the production life cycle.
              </p>
              <p className="p2">
                Through this experience in creating systems and methodologies,
                we have established the fundamentals of the art of making things
                and making them better.
              </p>
            </div>
            <div className="divisi3">
              <h5 className="he3">
                Some of the internationally recognised standards that we follow
                are
              </h5>
              <div className="divisi4">
                <h6 className="he4">
                  Failure Mode and Effects Analysis (FMEA){" "}
                </h6>
                <p className="p3">
                  An FMEA is oftenthe first step of a system reliability study.
                  It involves reviewing as many components, subsystems as
                  possible to identify failure moes, and their causes and
                  effects.
                </p>
                <h6 className="he5">
                  Production part approval process (PPAP) -
                </h6>
                <p className="p4">
                  is used in the automotive supply chain for establishing
                  confidence in component suppliers and their production
                  process, by means of demonstrating that all customer
                  engineering deign record and specificaion requirements are
                  properly inderstood by the supplier and that the process has
                  the potential to produce product consistently meeting these
                  requirements during an actual production run at the quoted
                  production rate
                </p>
                <h6 className="he6">
                  G8D(Eight Disciplines of Problem Solving) -
                </h6>
                <p className="p5">
                  is a meticulous process used to solve complex problems. This
                  is a popular method for problem solving because it is
                  reasonably easy to teach and effective. G8D uses composite
                  problem solving methodology, by borrowing tools and techniques
                  from various approaches.
                </p>
              </div>
            </div>
          </Col>
          <Col className="divisi5" lg={4}>
            <img src={img1} alt="" className="img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Quality;
