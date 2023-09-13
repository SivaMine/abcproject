import { TrainingDropDown } from "./Navitems";

import { Link } from "react-router-dom";
import "./Dropdown2.css";
import { useState } from "react";
function Dropdown2() {
  const [trainingdropdown, settrainingdropdown] = useState(false);
  return (
    <>
      <ul
        className={
          trainingdropdown ? "training-submenu clicked" : "training-submenu"
        }
        onClick={() => settrainingdropdown(!trainingdropdown)}
      >
        {TrainingDropDown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => {
                  settrainingdropdown(false);
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
export default Dropdown2;
