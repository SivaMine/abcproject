import "./Navbar.css";
import { Navitems } from "./Navitems";
import { Link } from "react-router-dom";
import Dropdown1 from "./Dropdown1";
import Dropdown2 from "./Dropdown2";
import { useState } from "react";
import img1 from "./pages/Navbarimg/Hugging.webp";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";
function Navbar() {
  const [servicedropdown, setservicedropdown] = useState(false);
  const [trainingdropdown, settrainingdropdown] = useState(false);
  const [mobile, setmobile] = useState(false);
  return (
    <div>
      <nav className="Navbar">
        <Link to="/home">
          <img src={img1} alt="logo" className="logo" />
        </Link>
        <ul
          className={mobile ? "nav-items-mobile" : "nav-items"}
          onClick={() => setmobile(false)}
        >
          {Navitems.map((item) => {
            if (item.title === "Our Company") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setservicedropdown(true)}
                  onMouseLeave={() => setservicedropdown(false)}
                >
                  <Link>{item.title}</Link>
                  {servicedropdown && <Dropdown1 />}
                </li>
              );
            } else if (item.title === "Training") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => settrainingdropdown(true)}
                  onMouseLeave={() => settrainingdropdown(false)}
                >
                  <Link>{item.title}</Link>
                  {trainingdropdown && <Dropdown2 />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <button className="mobile-menu-icon" onClick={() => setmobile(!mobile)}>
          {mobile ? (
            <h2>
              <FiChevronsUp />
            </h2>
          ) : (
            <h2>
              <FiChevronsDown />
            </h2>
          )}
        </button>
      </nav>
    </div>
  );
}
export default Navbar;
