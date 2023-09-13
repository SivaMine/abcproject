import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Sql.css";
import img1 from "./Sqlimg/1.jpeg";
import img2 from "./Sqlimg/2.jpg";
import img3 from "./Sqlimg/3.png";
import img4 from "./Sqlimg/4.png";
import img5 from "./Sqlimg/5.jpg";
import img6 from "./Sqlimg/6.jpg";
import img7 from "./Sqlimg/7.jpg";
import img8 from "./Sqlimg/8.jpg";
function Sql() {
  return (
    <div>
      <Container>
        <Row className="sql-row1">
          <Col className="sql-col1" lg={3}>
            <img src={img1} alt="" className="sql-img1" />
            <img src={img2} alt="" className="sql-img1" />
            <img src={img3} alt="" className="sql-img1" />
            <img src={img4} alt="" className="sql-img1" />
            <img src={img5} alt="" className="sql-img1" />
            <img src={img6} alt="" className="sql-img1" />
            <img src={img7} alt="" className="sql-img1" />
            <img src={img8} alt="" className="sql-img1" />
          </Col>
          <Col className="sql-col2" lg={6}>
            <h1 className="sql-head1">SQL DEVELOPER</h1>
            <h1 className="sql-head2">SQL-STRUCTURED QUERY LANGUAGE</h1>\
            <h4 className="sql-head3">What Is Database</h4>
            <h4 className="sql-head3">What Is DBMS & RDBMS</h4>
            <h4 className="sql-head3">What Is SQL</h4>
            <h4 className="sql-head3">
              Database Components (Client and Server)
            </h4>
            <h4 className="sql-head3">
              *****************************************************
            </h4>
            <h4 className="sql-head3">Installing MYSQL</h4>
            <h4 className="sql-head3">Working With MYSQL Workbench</h4>
            <h4 className="sql-head3">Command Line Clients</h4>
            <h4 className="sql-head3">
              *****************************************************
            </h4>
            <h4 className="sql-head3">Create Database</h4>
            <h4 className="sql-head3">Create Table</h4>
            <h4 className="sql-head3">Insert Data Into Table</h4>
            <h4 className="sql-head3">Select/Retrieve Data from a table</h4>
            <h4 className="sql-head3">
              *****************************************************
            </h4>
            <h4 className="sql-head3">
              WHERE (Filter the Records Using Conditions)
            </h4>
            <h4 className="sql-head3">
              DISTINCT (Display Unique Records From a Table)
            </h4>
            <h4 className="sql-head3">AND,OR,NOT</h4>
            <h4 className="sql-head3">BETWEEN, NOT BETWEEN</h4>
            <h4 className="sql-head3">
              Pattern Matching (Wildcard Characters)
            </h4>
            <h4 className="sql-head3">
              *****************************************************
            </h4>
            <h4 className="sql-head3">DDL Commands</h4>
            <ul className="sql-ul1">
              <li className="sql-li1">CREATE</li>
              <li className="sql-li1">ALTER</li>
              <li className="sql-li1">DROP</li>
              <li className="sql-li1">TRUNCATE</li>
              <li className="sql-li1">RENAME</li>
              <li className="sql-li1">
                Difference Between (Drop, Truncate, Delete)
              </li>
            </ul>
            <h4 className="sql-head3">
              *****************************************************
            </h4>
            <h4 className="sql-head3">BUILD IN FUNCTIONS IN SQL</h4>
            <ul className="sql-ul1">
              <li className="sql-li1">Strings Functions</li>
              <li className="sql-li1">Numeric Functions</li>
              <li className="sql-li1">Data Functions</li>
              <li className="sql-li1">Aggregate Functions</li>
            </ul>
            <h4 className="sql-head3">
              *****************************************************
            </h4>
            <h4 className="sql-head3">Few More Commands</h4>
            <ul className="sql-ul1">
              <li className="sql-li1">Group By</li>
              <li className="sql-li1">Having</li>
              <li className="sql-li1">Order By</li>
              <li className="sql-li1">Union</li>
              <li className="sql-li1">Union All</li>
              <li className="sql-li1">Joins</li>
              <li className="sql-li1">Sub Queries</li>
              <li className="sql-li1">Integrity Constraints</li>
              <li className="sql-li1">Auto Increment </li>
              <li className="sql-li1">Limit</li>
              <li className="sql-li1">SQL Views</li>
              <li className="sql-li1">Index</li>
            </ul>
            <h4 className="sql-head3">
              *****************************************************
            </h4>
            <h4 className="sql-head3">TCL Commands</h4>
            <ul className="sql-ul1">
              <li className="sql-li1">Commit</li>
              <li className="sql-li1">Rollback</li>
            </ul>
            <h4 className="sql-head3">
              *****************************************************
            </h4>
            <h4 className="sql-head3">JDBC -- Java Database Connectivity</h4>
            <h4 className="sql-head3">ODBC -- Open Database Connectivity</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Sql;
