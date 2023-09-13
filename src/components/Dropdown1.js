import { OurCompanyDropDown } from "./Navitems";

import { Link } from "react-router-dom";
import "./Dropdown1.css";
import { useState } from "react";
function Dropdown1() {
  const [servicedropdown, setservicedropdown] = useState(false);
  return (
    <>
      <ul
        className={
          servicedropdown ? "services-submenu clicked" : "services-submenu"
        }
        onClick={() => setservicedropdown(!servicedropdown)}
      >
        {OurCompanyDropDown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => {
                  setservicedropdown(false);
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Dropdown1;
