import React from "react";
import { Link } from "react-router-dom";
import { MdSlideshow } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="title">
          <MdSlideshow className="icon" />
          <h1>Shows App</h1>
        </div>
        <div>
          <ul>
            <li>
              <p>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
