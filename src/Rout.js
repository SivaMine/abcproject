import React from "react";
import Home from "./components/pages/Home";
import Clients from "./components/pages/Clients";
import Contactus from "./components/pages/Contactus";
import CompanyOverview from "./components/pages/CompanyOverview";
import Mission from "./components/pages/M&v";
import Infrastructure from "./components/pages/Infrastructure";
import Quality from "./components/pages/Quality";
import Python from "./components/pages/Python";
import Webdev from "./components/pages/Webdev";
import Automation from "./components/pages/Automation";
import Java from "./components/pages/Java";
import Sql from "./components/pages/Sql";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function Rout() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/clients" element={<Clients />}></Route>
          <Route path="/companyoverview" element={<CompanyOverview />}></Route>
          <Route path="/m&v" element={<Mission />}></Route>
          <Route path="/infrastructure" element={<Infrastructure />}></Route>
          <Route path="/quality" element={<Quality />}></Route>
          <Route path="/automation" element={<Automation />}></Route>
          <Route path="/sql" element={<Sql />}></Route>
          <Route path="/python" element={<Python />}></Route>
          <Route path="/java" element={<Java />}></Route>
          <Route path="/webdevelopment" element={<Webdev />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Rout;
