import React from "react";

const InlineLoader = () => {
  return (
    <div className="position-loader d-flex flex-column align-items-center justify-content-center d-inline">
      <div className="spinner spinner-small d-flex flex-row align-items-center justify-content-center">
        <div className="bg-gray-1 rect1"></div>
        <div className="bg-gray-1 rect2"></div>
        <div className="bg-gray-1 rect3"></div>
        <div className="bg-gray-1 rect4"></div>
        <div className="bg-gray-1 rect5"></div>
      </div>
    </div>
  );
};

export default InlineLoader;
