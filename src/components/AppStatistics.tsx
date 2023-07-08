import React from "react";

const AppStatistics = () => {
  return (
    <section id="app-statistics">
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center py-5">
        <h1 className="mb-3 text-light">App Statistics</h1>
        <div className="d-none d-md-block">
          <iframe
            width={800}
            height={1200}
            src="https://lookerstudio.google.com/embed/reporting/1e62921e-d2b8-4a87-8845-49ae7c5ca16d/page/7IlVD"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
        <div className="d-block d-md-none">
          <iframe
            width={350}
            height={1500}
            src="https://lookerstudio.google.com/embed/reporting/205e349f-90dd-4e0e-bab0-dab528beb759/page/7IlVD"
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
