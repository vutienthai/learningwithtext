import React from "react";
import { Link } from "react-router-dom";
import { LeftArrowIcon } from "../../utilities/svg";

const NotFound = () => {
  return (
    <section id="not-found" className="">
      <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-gray-1 mb-3">Page Not Found</h1>
        <Link
          to="/"
          className="btn btn-blue-1 get-started-btn text-uppercase text-light-yellow rounded-5 border border-black"
        >
          <i className="fa fa-arrow-circle-left me-1" aria-hidden="true"></i>{" "}
          Back To Homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
