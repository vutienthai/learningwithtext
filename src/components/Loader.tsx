import React from "react";

const Loader = () => {
  return (
    <div className="position-loader d-flex flex-column align-items-center justify-content-center min-vh-100 text-light">
      <div className="web-name text-yellow-1 d-inline h1 mb-3">LWT</div>
      Loading
      <div className="spinner d-flex flex-row align-items-center justify-content-center">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    </div>
  );
};

export default Loader;
