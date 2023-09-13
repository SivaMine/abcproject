import React, { useState } from "react";
import axios from "axios";
import "./Contactus.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  BsTelephoneOutboundFill,
  BsBuildingFillGear,
  BsEnvelopeFill,
} from "react-icons/bs";

function Contactus() {
  const [name, setname] = useState("");
  const [designation, setdesignation] = useState("");
  const [organisation, setorganisation] = useState("");
  const [address, setaddress] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [email, setemail] = useState("");
  const [comments, setcomments] = useState("");
  function contactus(event) {
    event.preventDefault();
    var user = {
      name: name,
      designation: designation,
      organisation: organisation,
      address: address,
      mobilenumber: mobilenumber,
      email: email,
      comments: comments,
    };
    axios
      .post("/api/user/registeruser", user)
      .then((res) => {
        console.log(res);
        alert(res.data);
      })
      .catch((res) => {
        alert(res);
        console.log(res);
      });
  }

  return (
    <div className="contactus">
      <Container>
        <Row>
          <Col className="address" lg={5}>
            <h1 className="heading">Our Address</h1>
            <h3 className="heading">INDIA</h3>
            <h3 className="heading">HeadOffice & UNIT1</h3>
            <h3 className="heading">ABC SYSTEMS PRIVATE LIMITED</h3>
            <div>
              <h5>
                <span className="span1">
                  <BsTelephoneOutboundFill className="icon-phone" />
                  <span className="span-para">(+91) 422-XXXXXXXX</span>
                </span>
                <span className="span2">
                  <BsEnvelopeFill className="icon-mail" />
                  <span className="span-para">info@abcsystems.co.in</span>
                </span>
                <span className="span3">
                  <BsBuildingFillGear className="icon-address" />
                  <span className="span-para">
                    site No:33,
                    <span style={{ fontWeight: "bold" }}>"The Garden"</span>
                    ,Emoji Road, gravity Village, Poonamallee(PO), Porur(Via),
                    Chennai-600 056.Tamilnadu,INDIA
                  </span>
                </span>
              </h5>
            </div>
            <div className="div-contact1">
              <h3 className="heading">UNIT2</h3>
              <h5>
                <span className="span1">
                  <BsTelephoneOutboundFill className="icon-phone" />
                  <span className="span-para">(+91) 80000 XXXXX</span>
                </span>
                <span className="span2">
                  <BsEnvelopeFill className="icon-mail" />
                  <span className="span-para">info@abcsystems.co.in</span>
                </span>
                <span className="span3">
                  <BsBuildingFillGear className="icon-address" />
                  <span className="span-para">
                    SF No:33,Emoji Road, Gravity Village, Poonamallee(PO),
                    Porur(Via), Chennai-600 056.Tamilnadu,INDIA
                  </span>
                </span>
              </h5>
            </div>
            <div className="div-contact1">
              <h3 className="heading">UNIT3</h3>
              <h5>
                <span className="span1">
                  <BsTelephoneOutboundFill className="icon-phone" />
                  <span className="span-para">(+91) 90000 123XX</span>
                </span>
                <span className="span2">
                  <BsEnvelopeFill className="icon-mail" />
                  <span className="span-para">
                    sales.chennai@abcsystems.co.in
                  </span>
                </span>
                <span className="span3">
                  <BsBuildingFillGear className="icon-address" />
                  <span className="span-para">
                    Site No:13, Emoji Nagar, Poonamallee , Chennai,600 056
                    ,Tamilnadu,India
                  </span>
                </span>
              </h5>
            </div>
          </Col>
          <Col className="form1" lg={6}>
            <h2 className="form-head">Let's Talk to Us</h2>
            <form onSubmit={contactus} className="forms">
              <input
                type="text"
                required
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              ></input>
              <br />

              <input
                type="text"
                required
                placeholder="Designation"
                className="form-control"
                value={designation}
                onChange={(e) => {
                  setdesignation(e.target.value);
                }}
              ></input>
              <br />

              <input
                type="text"
                required
                placeholder="Organisation"
                className="form-control"
                value={organisation}
                onChange={(e) => {
                  setorganisation(e.target.value);
                }}
              ></input>
              <br />

              <textarea
                name="message"
                placeholder="Address"
                rows="10"
                cols="30"
                id="mess"
                className="form-control"
                value={address}
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
              ></textarea>
              <br />
              <input
                type="text"
                required
                placeholder="MobileNumber"
                className="form-control"
                maxLength="10"
                value={mobilenumber}
                onChange={(e) => {
                  setmobilenumber(e.target.value);
                }}
              ></input>
              <br />
              <input
                type="email"
                required
                placeholder="E-mail"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              ></input>
              <br />
              <textarea
                id="mess"
                name="message"
                placeholder="Comments"
                rows="10"
                cols="30"
                className="form-control"
                value={comments}
                onChange={(e) => {
                  setcomments(e.target.value);
                }}
              ></textarea>
              <br />
              <input
                type="submit"
                value="Register"
                className="btn btn-danger"
              />
            </form>
          </Col>
        </Row>
      </Container>
      <Container className="contact-container-1">
        <Row>
          <div className="row div2">
            <div className="col-md-3 col1">
              <h3 className="heading1">SRILANKA</h3>
              <h5>RITECH CONTROL SYSTEMS LANKA PVD LTD</h5>
              <p>
                Regd. Off : 122/1,
                <br /> Stanley Thillakarathna Mawathe,
                <br />
                Nugegoda,
                <br />
                Srilanka - 10250 <br />
                Phone : +94(0)112810834 <br />
                Mobile : +94(0) 777 717537 <br />
                E-mail : dsk@ritech.lk <br />
                Web : www.ritech.lk
              </p>
            </div>
            <div className="col-md-3 col1">
              <h3 className="heading1">SINGAPURE</h3>
              <h5>ELITE ENGINEERING EXPORTS PVT LTD</h5>
              <p>
                Regd. Off : APT BLK 81, Bedok North Road
                <br />
                No 09-298, Singapore - 460 081
                <br />
                Phone : +65 64441765
                <br />
                Mobile : +65 84971380
                <br />
                Fax : +65 64449350
                <br />
                E-mail : eeepte@singnet.com
                <br />
                Web : www.eept.com
                <br />
              </p>
            </div>
            <div className="col-md-3 col1">
              <h3 className="heading1">INDONESIA</h3>
              <h5>PT INDO ILLAM INDAH</h5>
              <p>
                BPSP Blok II/4 JI.
                <br /> Pulogadung II Kawasan Industri Pulogadung,
                <br /> Jakarta Timur 13920.
                <br />
                Phone : +62 (021) 4601991 40000147, 40001141
                <br />
                Mobile : +62 818657286 / +62 8159166385 +62 88808523193
                <br />
                Fax : +62 (021) 4601992
                <br />
                E-mail : illam@indoillamindah.com
                <br />
                Web :www.indoillamindah.com
              </p>
            </div>
            <div className="col-md-3 col1">
              <h3 className="heading1">PARENT</h3>
              <h5>Paraent Technical Products India Pvt. Ltd</h5>
              <p>
                Paraent Technical Products India Pvt. Ltd.,
                <br />
                Door No: 15/59, S.F.No: 250/2, The Garden Retreat
                <br />
                Karavalli Road, Ottarpalayam Village
                <br />
                Pallapalayam Post, Irugur Via
                <br />
                Coimbatore - 641 103. Tamilnadu, India
                <br />
                Phone : +91 - 97511-00900
                <br />
                E-mail : info@paraent.in
                <br />
                Web: www.paraent.in
                <br />
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Contactus;
