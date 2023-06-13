import { useState } from "react";
// import { Link } from "react-router-dom";
import { CloseMenuIcon, EmailIcon, OpenMenuIcon } from "../utilities/svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container">
        <Link className="navbar-brand h1 text-white" to="/">
          <div className="web-name d-inline">VB</div>
        </Link>
        <button
          id="toggle-btn"
          className="navbar-toggler px-2 py-1 border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setMenuExpanded(!menuExpanded)}
        >
          {menuExpanded ? <CloseMenuIcon /> : <OpenMenuIcon />}
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="w-100 d-flex flex-sm-row flex-column justify-content-between">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Features
                </Link>
              </li> */}
            </ul>
            <div>
              <button className="btn btn-red-1 text-uppercase text-light-yellow rounded-5 border-black my-3 my-md-0 d-flex gap-2 align-items-center">
                <EmailIcon /> Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
