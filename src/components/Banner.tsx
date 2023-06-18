import { Link } from "react-router-dom";
import {
  BookmarkIcon,
  AwardIcon,
  BezierIcon,
  QuoteIcon,
  StarIcon,
  RightArrowIcon,
  BalloonIcon,
  DoorIcon,
  CupIcon,
} from "../utilities/svg";
import Icons from "./Icons";

type Props = { loggedIn: boolean };

const Banner = (props: Props) => {
  return (
    <section>
      <div
        id="banner"
        className="container-fluid d-flex justify-content-center align-items-center position-relative mb-3"
      >
        <Icons loggedIn={props.loggedIn} />

        <div className="col-12 col-md-8 col-lg-6">
          <div
            id="get-started"
            className="bg-yellow-1 d-flex flex-column justify-content-center align-items-center px-3 py-4 p-md-4 p-lg-5 rounded-5 border-3 border-black position-relative"
          >
            <h1 className="text-light-yellow text-center text-stroke-black ">
              Vocabulary Builder
            </h1>
            <p className="text-center fs-5">Learn vocabulary with texts.</p>
            <button
              className={`get-started-btn btn ${
                props.loggedIn ? "btn-green-1" : "btn-red-1"
              } text-uppercase text-light-yellow rounded-5 border border-black`}
            >
              <Link
                to={"/app"}
                className=" d-flex gap-2 align-items-center justify-content-center"
              >
                {props.loggedIn ? "Go to the app" : "Get started"}{" "}
                <RightArrowIcon />
              </Link>
            </button>

            <div id="review-1" className="position-absolute top-0 end-0">
              <div className="bg-purple-1 border border-black rounded-3 p-3 position-relative">
                <div className="quote-icon position-absolute top-0 start-0">
                  <QuoteIcon color={"text-light-yellow"} />
                </div>
                <div className="text-center text-strong">Awesome!</div>
                <div className="text-center">-Ha Nguyen</div>
                <div className="text-center">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
            </div>
            <div id="review-2" className="position-absolute bottom-0 start-0">
              <div className="bg-pink-1 border border-black rounded-3 p-3 position-relative">
                <div className="quote-icon position-absolute top-0 start-0">
                  <QuoteIcon color={"text-light-yellow"} />
                </div>
                <div className="text-center text-strong">
                  Really enjoyed it!
                </div>
                <div className="text-center">-Ha Nguyen</div>
                <div className="text-center">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
