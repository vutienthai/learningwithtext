import { useEffect } from "react";
import {
  AwardIcon,
  BezierIcon,
  BookmarkIcon,
  QuoteIcon,
  StarIcon,
} from "../utilities/svg";
import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";
import { Auth } from "firebase/auth";

type Props = { auth: Auth; loggedIn: boolean };

const Login = (props: Props) => {
  const uiConfig = {
    signInOptions: [{ provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID }],
    signInFlow: "popup",
  };

  useEffect(() => {
    if (!props.loggedIn) {
      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(props.auth);
      ui.start("#firebaseui-auth-container", uiConfig);
    }
  }, []);

  return (
    <section>
      <div
        id="banner"
        className="container-fluid d-flex justify-content-center align-items-center position-relative mb-3"
      >
        <div
          id="bookmark-icon"
          className="bg-black p-2 p-md-3 position-absolute top-0 start-0 z-0"
        >
          <BookmarkIcon />
        </div>
        <div
          id="award-icon"
          className="bg-black p-2 p-md-3 position-absolute bottom-0 end-0 z-0"
        >
          <AwardIcon />
        </div>
        <div
          id="bezier-icon"
          className="bg-black p-2 p-md-3 position-absolute top-0 end-0 z-0 d-none d-lg-block"
        >
          <BezierIcon />
        </div>
        <div className="col-12 col-md-8 col-lg-6">
          <div
            id="get-started"
            className="bg-green-1 d-flex flex-column justify-content-center align-items-center px-3 py-4 p-md-4 p-lg-5 rounded-5 border-3 border-black position-relative"
          >
            {props.loggedIn ? (
              <h1 className="text-light-yellow text-center text-stroke-black ">
                You are logged in.
              </h1>
            ) : (
              <>
                <h1 className="text-light-yellow text-center text-stroke-black ">
                  Please sign in
                </h1>
                <p className="text-center m-0">Use your Google Account.</p>
                <div id="firebaseui-auth-container" className=""></div>
              </>
            )}

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
export default Login;
