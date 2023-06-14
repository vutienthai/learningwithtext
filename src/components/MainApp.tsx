import { onAuthStateChanged } from "firebase/auth";
import firebase from "firebase/compat/app";
import { useEffect } from "react";

type Props = {
  userName: string;
  userEmail: string;
  loggedIn: boolean;
};

const MainApp = (props: Props) => {
  console.log("props.loggedIn", props.loggedIn);
  console.log("props.userName", props.userName);
  console.log("props.userEmail", props.userEmail);

  if (props.loggedIn) {
    return (
      <section id="main-app" className="bg-dark min-vh-100">
        <div className="row p-4">
          <div className="col-12 col-lg-8">
            <div className="rounded-5 bg-light-yellow">
              <div className="d-flex flex-column align-item-center justify-content-center text-center ">
                <div className="rounded mx-2 p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia pariatur laborum minima veniam necessitatibus iste
                  sunt reiciendis ea delectus tempora, illo impedit aut
                  perspiciatis? Distinctio, cumque blanditiis animi neque nihil
                  quis ut consectetur vel consequatur, perspiciatis qui quia
                  aperiam quisquam ab nobis. Officia praesentium alias earum
                  illum voluptatum necessitatibus adipisci consequatur ipsam
                  fugiat, recusandae veniam, debitis consequuntur quia animi
                  facere nihil explicabo dolor eligendi, repudiandae facilis ad
                  eum beatae vel? Earum quasi sequi fuga a nostrum corrupti amet
                  consequatur, nulla dolorem unde illo facilis soluta dicta qui
                  illum quaerat voluptas voluptate labore. Magni veniam
                  voluptatum, dolore quasi ut adipisci cupiditate?
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4"></div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="main-app">
        <div className="d-flex flex-column align-item-center justify-content-center text-center text-light-yellow">
          <h1>Please log in</h1>
        </div>
      </section>
    );
  }
};

export default MainApp;
