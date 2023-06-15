import { onAuthStateChanged } from "firebase/auth";
import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { GenerateIcon } from "../utilities/svg";

type Props = {
  userName: string;
  userEmail: string;
  loggedIn: boolean;
};

const MainApp = (props: Props) => {
  console.log("props.loggedIn", props.loggedIn);
  console.log("props.userName", props.userName);
  console.log("props.userEmail", props.userEmail);

  const [userInputSplit, setUserInputSplit] = useState<string[]>([]);

  const onClickWordHandler = (e: any) => {
    console.log(e.target);
  };

  const generateHandler = (e: any) => {
    const generatedUserInput = document.getElementById(
      "generated-user-input"
    ) as Element;
    const generatedUserInputContainer = document.getElementById(
      "generated-user-input-container"
    ) as Element;
    const userInput = document.getElementById("user-input") as HTMLInputElement;
    const userInputContainer = document.getElementById(
      "user-input-container"
    ) as HTMLInputElement;
    console.log(userInput.value);

    const userInputSplit = userInput.value.split(/\s+/);
    setUserInputSplit(userInputSplit);
    console.log("userInputSplit", userInputSplit);

    generatedUserInputContainer.classList.remove("d-none");
    userInputContainer.classList.add("d-none");
  };

  if (props.loggedIn) {
    return (
      <section id="main-app" className="bg-dark min-vh-100">
        <div className="row p-4">
          <div className="col-12 col-lg-8">
            <div id="user-input-container" className="d-flex flex-column gap-4">
              <h2 className="text-light-yellow m-0">Please input your text:</h2>
              <div className="">
                <textarea
                  id="user-input"
                  className="form-control rounded-5 border-0 p-3 p-md-5"
                  rows={15}
                ></textarea>
              </div>
              <button
                id="generate-btn"
                className="btn btn-green-1 text-light-yellow rounded-5 d-flex justify-content-center align-items-center gap-1"
                onClick={generateHandler}
              >
                <GenerateIcon size={16} />
                Generate
              </button>
            </div>
            <div
              id="generated-user-input-container"
              className=" d-flex flex-column gap-4 d-none"
            >
              <h2 className="text-light-yellow m-0">Your text:</h2>
              <div className="">
                <div
                  id="generated-user-input"
                  className="rounded-5 border-0 p-3 p-md-5 bg-light"
                >
                  {userInputSplit.map((word) => (
                    <>
                      <span
                        className={word}
                        data-word={word}
                        onClick={onClickWordHandler}
                      >
                        {word}
                      </span>{" "}
                    </>
                  ))}
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
