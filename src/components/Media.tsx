import {
  GripIcon,
  Yahoo,
  Bloomberg,
  TechCrunch,
  TheNewYorkTimes,
} from "../utilities/svg";

const Media = () => {
  return (
    <section>
      <div className="d-flex flex-column align-items-center justify-content-center py-5">
        <div className="fs-3 text-center text-light-yellow">As Featured In</div>
        <GripIcon />
        <div className="d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center py-3">
          {/* <div className="">
            <AppleIcon />
          </div>
          <div className="">
            <PlayStoreIcon />
          </div> */}
          <div className="media-logo">
            <TechCrunch />
          </div>
          <div className="media-logo">
            <Yahoo />
          </div>
          <div className="media-logo">
            <Bloomberg />
          </div>
          <div className="media-logo">
            <TheNewYorkTimes />
          </div>
        </div>
        <div className="h1 text-uppercase text-center px-5 py-3">
          JOIN <span className="text-underline">10,000+</span> USERS AND START
          LEARNING TODAY.
        </div>
      </div>
    </section>
  );
};

export default Media;
