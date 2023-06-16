import { useState } from "react";
// import { Link } from "react-router-dom";
import {
  CloseMenuIcon,
  ChatIcon,
  ChatWithHeartIcon,
  LogoutIcon,
  OpenMenuIcon,
} from "../utilities/svg";
import { Link } from "react-router-dom";
import { Auth } from "firebase/auth";

type Props = {
  auth: Auth;
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  userName: string;
  lastSignInTime: string;
};

const Navbar = (props: Props) => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand h1 text-white" to="/">
          <div className="web-name text-yellow-1 d-inline">VB</div>
        </Link>
        <button
          id="toggle-btn"
          className="navbar-toggler px-2 py-1 border-0 d-flex flex-row"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setMenuExpanded(!menuExpanded)}
        >
          {menuExpanded ? <CloseMenuIcon /> : <OpenMenuIcon />}{" "}
          <div id="navbar-chat-icon" className="text-yellow-1">
            {menuExpanded ? (
              <ChatWithHeartIcon size={20} />
            ) : (
              <ChatIcon size={20} />
            )}{" "}
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="w-100 d-flex flex-sm-row flex-column align-items-end justify-content-between my-4 my-md-0">
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
            <div className="d-flex flex-column gap-3 align-items-center justify-content-end">
              {/* <div className="fs-5 user-name text-center text-dark text-uppercase">
                Hi, {props.userName}
              </div> */}

              {props.loggedIn ? (
                <div className="d-flex flex-column gap-3 justify-content-end">
                  <div className="text-light-yellow">
                    Welcome,{" "}
                    <span className="text-uppercase text-strong text-green-1">
                      {props.userName.split(" ")[0]}
                    </span>
                  </div>
                  <div className="text-light-yellow">
                    Haven't seen you since{" "}
                    <span className="text-strong text-green-1">
                      {props.lastSignInTime}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="">
                  Stop touching me if you have not logged in...
                </div>
              )}

              <div>
                {props.loggedIn ? (
                  <button
                    className="btn btn-sm btn-outline-red-1 text-uppercase text-light-yellow rounded-5 border-black d-flex gap-2 align-items-center px-3"
                    onClick={() => {
                      props.auth.signOut();
                      props.setLoggedIn(false);
                      console.log("auth.signOut");
                    }}
                  >
                    <LogoutIcon size={16} /> Logout
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
