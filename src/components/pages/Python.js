import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Python.css";
import Granim from "granim";
import img1 from "./Pythonimg/python1.jpg";
import img2 from "./Pythonimg/python2.jpg";
import img3 from "./Pythonimg/python3.jpg";
import img4 from "./Pythonimg/python4.jpg";
import img5 from "./Pythonimg/python5.jpg";
import img6 from "./Pythonimg/python6.png";
import img7 from "./Pythonimg/python7.jpg";
import img8 from "./Pythonimg/python8.png";
import img9 from "./Pythonimg/python9.jpg";
function Python() {
  return (
    <div>
      <Container>
        <Row className="pyrow1">
          <Col className="pycol1" lg={3}>
            <img src={img1} alt="" className="imi1" />
            <img src={img2} alt="" className="imi1" />
            <img src={img3} alt="" className="imi1" />
            <img src={img4} alt="" className="imi1" />
            <img src={img5} alt="" className="imi1" />
            <img src={img6} alt="" className="imi1" />
            <img src={img7} alt="" className="imi1" />
            <img src={img8} alt="" className="imi1" />
            <img src={img9} alt="" className="imi1" />
          </Col>
          <Col className="pycol2" lg={6}>
            <h1 className="py-head1">PYTHON DEVELOPER</h1>
            <h1 className="py-head2">CORE & ADVANCED PYTHON</h1>
            <h4 className="py-head3">BASIC CONCEPTS OF PYTHON</h4>
            <ul className="py-ul1">
              <li className="py-li1">Introduction of Python</li>
              <li className="py-li1">Features of Python</li>
              <li className="py-li1">Python Syntax</li>
              <li className="py-li1">Comments</li>
              <li className="py-li1">Variables</li>
              <li className="py-li1">DataTypes</li>
              <li className="py-li1">Numbers</li>
              <li className="py-li1">Strings</li>
              <li className="py-li1">Boolean</li>
              <li className="py-li1">Operators</li>
              <li className="py-li1">List</li>
              <li className="py-li1">Tuple</li>
              <li className="py-li1">Set</li>
              <li className="py-li1">Dictionary</li>
            </ul>
            <h4 className="py-head3">CONDITIONAL STATEMENTS</h4>
            <ul className="py-ul1">
              <li className="py-li1">if</li>
              <li className="py-li1">if else</li>
              <li className="py-li1">if elif else</li>
              <li className="py-li1">Multiple if else</li>
              <li className="py-li1">Nested if else</li>
            </ul>
            <h4 className="py-head3">LOOPING STATEMENTS</h4>
            <ul className="py-ul1">
              <li className="py-li1">For Loop</li>
              <li className="py-li1">While Loop</li>
            </ul>
            <h4 className="py-head3">FUNCTIONS</h4>
            <ul className="py-ul1">
              <li className="py-li1">Creating & Calling a Function</li>
              <li className="py-li1">Function With & Without Parameters</li>
            </ul>
            <h4 className="py-head3">OOPs</h4>
            <ul className="py-ul1">
              <li className="py-li1">Class</li>
              <li className="py-li1">Object</li>
              <li className="py-li1">Method</li>
              <li className="py-li1">Inheritance</li>
              <li className="py-li1">Polymorphism</li>
              <li className="py-li1">DataAbstraction</li>
              <li className="py-li1">Encapsulation</li>
            </ul>
            <h4 className="py-head3">MODULES</h4>
            <ul className="py-ul1">
              <li className="py-li1">Numpy</li>
              <li className="py-li1">Pandas</li>
              <li className="py-li1">Matplotlib</li>
              <li className="py-li1">Regular Expression</li>
              <li className="py-li1">Date & Time</li>
              <li className="py-li1">Threads</li>
            </ul>
            <h4 className="py-head3">EXCEPTION HANDLING</h4>
            <ul className="py-ul1">
              <li className="py-li1">Try</li>
              <li className="py-li1">Except</li>
              <li className="py-li1">Finally</li>
            </ul>
            <h4 className="py-head3">PYTHON WITH SQL DATABASE ACCESS</h4>
            <h4 className="py-head3">PYTHON PROBLEM SOLVING</h4>
          </Col>
          <Col className="pycol-3" lg={2}>
            <h5 className="py-head4">APPLICATIONS OF PYTHON</h5>
            <ul className="py-ul2">
              <li className="py-li2">Web Development</li>
              <li className="py-li2">Artificial Intelligence</li>
              <li className="py-li2">Software Development</li>
              <li className="py-li2">Operating Systems Development</li>
              <li className="py-li2">Language Development</li>
              <li className="py-li2">Desktop GUI Development</li>
              <li className="py-li2">Data Science and Data Analysis</li>
              <li className="py-li2">Integration to Embedded Systems</li>
              <li className="py-li2">Database Access</li>
              <li className="py-li2">Robotics</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Python;
