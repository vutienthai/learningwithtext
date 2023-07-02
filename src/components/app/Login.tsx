import { useEffect } from "react";
import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";
import { Auth } from "firebase/auth";
import Icons from "../homepage/BannerIcons";
import { FloatingReview1, FloatingReview2 } from "../homepage/FloatingReviews";

type Props = { auth: Auth };

const Login = (props: Props) => {
  const uiConfig = {
    signInOptions: [{ provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID }],
    signInFlow: "popup",
  };

  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(props.auth);
    ui.start("#firebaseui-auth-container", uiConfig);
  });

  return (
    <section>
      <div
        id="banner"
        className="container-fluid d-flex justify-content-center align-items-center position-relative mb-3"
      >
        <Icons loggedIn={false} />
        <div className="col-12 col-md-8 col-lg-6">
          <div
            id="get-started"
            className="bg-green-1 d-flex flex-column justify-content-center align-items-center px-3 py-4 p-md-4 p-lg-5 rounded-5 border-3 border-black position-relative"
          >
            <h1 className="text-yellow-1 text-center text-stroke-black ">
              Please sign in
            </h1>
            <p className="text-center fs-5">Use your Google Account.</p>
            <div id="firebaseui-auth-container" className=""></div>
            <div id="review-1" className="position-absolute top-0 end-0">
              <FloatingReview1 />
            </div>
            <div id="review-2" className="position-absolute bottom-0 start-0">
              <FloatingReview2 />
            </div>
          </div>
          I
        </div>
      </div>
    </section>
  );
};
export default Login;
