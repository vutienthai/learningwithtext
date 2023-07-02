import React from "react";

const AppStatistics = () => {
  return (
    <section>
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1>App Statistics</h1>
        <div>
          <iframe
            width={1000}
            height={800}
            src="https://lookerstudio.google.com/embed/reporting/2b0c423d-d866-4c67-9b7f-d818b8914e5d/page/7IlVD"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default AppStatistics;
