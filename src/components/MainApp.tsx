import { EditIcon, GenerateIcon } from "../utilities/svg";
import { SavedTexts } from ".";

// Firebase
import { doc, setDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

type Props = {
  userName: string;
  userEmail: string;
  loggedIn: boolean;
  savedTexts: { title: string; text: string }[];
  setSavedTexts: (texts: { title: string; text: string }[]) => void;
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  generatedText: string[];
  setGeneratedText: (text: string[]) => void;
};

const generateID = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const MainApp = (props: Props) => {
  const onClickWordHandler = (e: any) => {
    console.log(e.target);
  };

  const generateHandler = () => {
    const userInput = document.getElementById("user-input") as HTMLInputElement;
    const userInputTitle = document.getElementById(
      "user-input-title"
    ) as HTMLInputElement;
    console.log(userInput.value);

    const userInputSplit = userInput.value.split(/\s+/);
    console.log("userInputSplit", userInputSplit);

    props.setGeneratedText(userInputSplit);
    props.setSavedTexts([
      ...props.savedTexts,
      { title: userInputTitle.value, text: userInput.value },
    ]);
    props.setEditMode(false);

    // Send data to Firebase
    const randomId = generateID();
    const timestamp = new Date();

    setDoc(doc(db, props.userEmail, randomId), {
      id: randomId,
      timestamp: timestamp,
      title: userInputTitle.value,
      text: userInput.value,
    });
  };

  const newTextHandler = () => {
    props.setEditMode(true);
  };

  if (props.loggedIn) {
    return (
      <section id="main-app" className="bg-dark min-vh-100">
        <div className="row p-4">
          <div className="col-12 col-lg-8 px-2 px-lg-5 my-4 my-lg-2">
            <div
              id="user-input-container"
              className={`d-flex flex-column gap-4 ${
                props.editMode ? "" : "d-none"
              }`}
            >
              <h2 className="text-light-yellow m-0">Please input your text:</h2>
              <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                <input
                  id="user-input-title"
                  type="text"
                  placeholder="Title"
                  className="form-control rounded-4 border-0 px-3 px-md-5"
                />
                <textarea
                  id="user-input"
                  placeholder="Text"
                  className="form-control rounded-4 border-0 p-3 p-md-5"
                  rows={15}
                />
              </div>
              <button
                id="generate-btn"
                className="btn btn-green-1 text-light-yellow rounded-5 d-flex justify-content-center align-items-center gap-2"
                onClick={generateHandler}
              >
                <GenerateIcon size={16} />
                Generate
              </button>
            </div>
            <div
              id="generated-user-input-container"
              className={`d-flex flex-column gap-4 ${
                props.editMode ? "d-none" : ""
              }`}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="text-light-yellow m-0">Your text:</h2>
                <button
                  id="new-text-btn"
                  className="btn btn-purple-1 text-light-yellow rounded-5 d-flex justify-content-center align-items-center gap-2"
                  onClick={newTextHandler}
                >
                  <EditIcon size={16} />
                  New Text
                </button>
              </div>
              <div className="">
                <div
                  id="generated-user-input"
                  className="rounded-5 border-0 p-3 p-md-5 bg-light"
                >
                  {props.generatedText.map((word, index) => (
                    <>
                      <span
                        key={index}
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
          <div className="col-12 col-lg-4 px-2 px-lg-5 my-4 my-lg-2">
            <SavedTexts
              savedTexts={props.savedTexts}
              setSavedTexts={props.setSavedTexts}
              setGeneratedText={props.setGeneratedText}
            />
          </div>
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
