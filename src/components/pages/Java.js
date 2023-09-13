import React from "react";
import "./Java.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./Javaimg/1.jpg";
import img2 from "./Javaimg/2.jpg";
import img3 from "./Javaimg/3.png";
import img4 from "./Javaimg/4.webp";
import img5 from "./Javaimg/5.png";
import img6 from "./Javaimg/6.png";
import img7 from "./Javaimg/7.png";
function Java() {
  return (
    <div>
      <Container>
        <Row className="javarow-1">
          <Col className="javacol1" lg={3}>
            <img src={img1} alt="" className="javaimg1" />
            <img src={img2} alt="" className="javaimg1" />
            <img src={img3} alt="" className="javaimg1" />
            <img src={img4} alt="" className="javaimg1" />
            <img src={img5} alt="" className="javaimg1" />
            <img src={img6} alt="" className="javaimg1" />
            <img src={img7} alt="" className="javaimg1" />
          </Col>
          <Col className="javacol-2" lg={6}>
            <h1 className="java-head1">JAVA DEVELOPER</h1>
            <h1 className="java-head2">CORE JAVA</h1>
            <h4 className="java-head3">BASIC CONCEPTS OF JAVA</h4>
            <ul className="java-ul1">
              <li className="java-li1">Introduction of Java</li>
              <li className="java-li1">History of Java</li>
              <li className="java-li1">Java Syntax</li>
              <li className="java-li1">Java Comments</li>
              <li className="java-li1">Java Variables</li>
              <li className="java-li1">Java DataTypes</li>
              <li className="java-li1">Java Output</li>
              <li className="java-li1">Java Casting</li>
              <li className="java-li1">Java String</li>
              <li className="java-li1">Java Boolean</li>
              <li className="java-li1">Java Operators</li>
              <li className="java-li1">Math in Java</li>
              <li className="java-li1">Array in Java</li>
            </ul>
            <h4 className="java-head3">CONDITIONAL STATEMENTS</h4>
            <ul className="java-ul1">
              <li className="java-li1">if</li>
              <li className="java-li1">else</li>
              <li className="java-li1">else if</li>
              <li className="java-li1">Switch</li>
            </ul>
            <h4 className="java-head3">LOOPING STATEMENTS</h4>
            <ul className="java-ul1">
              <li className="java-li1">For Loop</li>
              <li className="java-li1">While Loop</li>
              <li className="java-li1">do While Loop</li>
            </ul>
            <h4 className="java-head3">BREAK & CONTINUE STATEMENTS</h4>
            <h4 className="java-head3">ACCESS SPECIFIER</h4>
            <ul className="java-ul1">
              <li className="java-li1">Private</li>
              <li className="java-li1">Public</li>
              <li className="java-li1">Protected</li>
              <li className="java-li1">Default</li>
            </ul>

            <h4 className="java-head3">OOPs</h4>
            <ul className="java-ul1">
              <li className="java-li1">Class</li>
              <li className="java-li1">Object</li>
              <li className="java-li1">Methods</li>
              <li className="java-li1">Constructors</li>
              <li className="java-li1">Inheritance</li>
              <li className="java-li1">Polymorphism</li>
              <li className="java-li1">DataAbstraction</li>
              <li className="java-li1">Encapsulation</li>
            </ul>
            <h4 className="java-head3">COLLECTIONS</h4>
            <ul className="java-ul1">
              <li className="java-li1">List</li>
              <li className="java-li1">Set</li>
              <li className="java-li1">Map</li>
            </ul>
            <h4 className="java-head3">JAVA REGEX</h4>

            <h4 className="java-head3">EXCEPTION HANDLING</h4>
            <ul className="java-ul1">
              <li className="java-li1">Try</li>
              <li className="java-li1">Catch</li>
              <li className="java-li1">Finally</li>
            </ul>

            <h4 className="java-head3">FILE HANDLING</h4>
            <ul className="java-ul1">
              <li className="java-li1">Writing a File</li>
              <li className="java-li1">Reading a File</li>
              <li className="java-li1">Deleting a File</li>
            </ul>
            <h4 className="java-head3">JAVA THREAD METHODS</h4>
            <h4 className="java-head3">JAVA PROBLEM SOLVING</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Java;
