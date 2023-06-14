import { Link } from "react-router-dom";
import Reviews from "./Reviews";
import { RightArrowIcon } from "../utilities/svg";

type Props = { loggedIn: boolean };

const Review = (props: Props) => {
  return (
    <section id="review-section">
      <div className="d-flex flex-column flex-xl-row align-items-center justify-content-center bg-light-yellow rounded-5 mx-3 mb-3 mx-lg-5 p-3 p-lg-5">
        <div className="col-xl-5">
          <div className="d-flex flex-column ">
            <h1 className="text-red-1 text-uppercase text-stroke-black">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="fs-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              possimus quia non laudantium.
            </p>
            <p className="fs-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque voluptatum tempora labore dicta possimus eius suscipit
              earum nulla aut? Consectetur dignissimos dolores voluptas nulla
              minus libero sint iusto cum magni!
            </p>
            <p className="fs-4">Lorem ipsum dolor sit amet...</p>
          </div>
          <button
            className={`get-started-btn btn ${
              props.loggedIn ? "btn-green-1" : "btn-red-1"
            } text-uppercase text-light-yellow rounded-5 border border-black d-sm-block d-none`}
          >
            <Link
              to={"/app"}
              className=" d-flex gap-2 align-items-center justify-content-center"
            >
              {props.loggedIn ? "Go to the app" : "Get started"}
              <RightArrowIcon />
            </Link>
          </button>
        </div>
        <div className="col-xl-7 my-0 my-sm-4 my-md-0 d-flex flex-column justify-content-center">
          <Reviews />
          <button
            className={`get-started-btn btn ${
              props.loggedIn ? "btn-green-1" : "btn-red-1"
            } text-uppercase text-light-yellow rounded-5 border border-black d-block d-sm-none my-3`}
          >
            <Link
              to={"/app"}
              className=" d-flex gap-2 align-items-center justify-content-center"
            >
              {props.loggedIn ? "Go to the app" : "Get started"}
              <RightArrowIcon />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
