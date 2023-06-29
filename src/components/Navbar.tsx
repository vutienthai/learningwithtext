import { useState } from "react";
// import { Link } from "react-router-dom";
import {
  CloseMenuIcon,
  ChatIcon,
  ChatWithHeartIcon,
  LogoutIcon,
  OpenMenuIcon,
  RightArrowIcon,
  UserIcon,
  EmailIcon,
  ClockIcon,
} from "../utilities/svg";
import { Link } from "react-router-dom";
import { Auth } from "firebase/auth";

type Props = {
  auth: Auth;
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  userName: string;
  userEmail: string;
  userPhoto: string;
  lastSignInTime: string;
};

const Navbar = (props: Props) => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const menuStyle =
    "d-flex align-items-center gap-4 p-3 rounded bg-charcoal-1 text-fs-13";
  const navbarButton =
    "btn btn-sm btn-outline-red-1 text-uppercase text-light-yellow rounded-5 border-black d-flex gap-2 align-items-center px-3";
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand  text-white" to="/">
          <div className="web-name text-yellow-1 d-inline h1">LWT</div>
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
          {menuExpanded ? <OpenMenuIcon /> : <OpenMenuIcon />}{" "}
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/app">
                  App
                </Link>
              </li> */}
            </ul>
            <div className="mb-3">
              <div className="d-flex flex-column gap-3 justify-content-end align-items-end">
                {props.loggedIn ? (
                  <>
                    <div className={menuStyle}>
                      <div>
                        <img src={props.userPhoto} alt="" />
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <div className="d-flex flex-column">
                          <div className="text-light-yellow d-flex align-items-center gap-2">
                            <UserIcon size={13} />{" "}
                            <span className="text-green-1">
                              {props.userName}
                            </span>
                          </div>
                          <div className="text-light-yellow d-flex align-items-center gap-2">
                            <EmailIcon size={13} />{" "}
                            <span className=" text-green-1">
                              {props.userEmail}
                            </span>
                          </div>
                          <div className="text-coal-1 d-flex align-items-center gap-2">
                            <ClockIcon size={13} /> Last sign in time:{" "}
                            <span className="">
                              {props.lastSignInTime.slice(0, 16)}
                            </span>
                          </div>
                        </div>
                        <div>
                          <button
                            className={navbarButton}
                            onClick={() => {
                              props.auth.signOut();
                              props.setLoggedIn(false);
                              console.log("auth.signOut");
                            }}
                          >
                            <LogoutIcon size={16} /> Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={menuStyle}>
                      <div className="text-light-yellow">
                        Oops! You have not logged in...
                      </div>
                      <div>
                        <button className={navbarButton}>
                          <Link
                            to={"/app"}
                            className=" d-flex gap-2 align-items-center justify-content-center"
                          >
                            Login
                            <RightArrowIcon size={14} />
                          </Link>
                        </button>
                      </div>
                    </div>
                  </>
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
