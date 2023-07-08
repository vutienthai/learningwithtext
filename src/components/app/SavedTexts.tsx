import { TextIcon } from "../../utilities/svg";
// Firebase
import { db } from "../../services/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

type Props = {
  userEmail: string;
  savedTexts: { id: string; title: string; text: string; timestamp: Date }[];
  setSavedTexts: (
    text: { id: string; title: string; text: string; timestamp: Date }[]
  ) => void;
  setGeneratedText: (text: string[][]) => void;
  setGeneratedTextTitle: (text: string) => void;
  setEditMode: (value: boolean) => void;
  convertPlainTextToWords: (text: string) => string[][];
};

const SavedTexts = (props: Props) => {
  const deleteSavedText = (e: any) => {
    const textID = e.target.parentNode.getAttribute("data-text-id");

    console.log("textID", textID);
    const userCollectionPath = `users/${props.userEmail}/textCollection`;
    deleteDoc(doc(db, userCollectionPath, textID));

    let tempSavedTexts = [...props.savedTexts];
    tempSavedTexts = tempSavedTexts.filter((text) => text.id !== textID);
    props.setSavedTexts(tempSavedTexts);
  };

  if (props.savedTexts.length > 0) {
    return (
      <>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-2">
            {props.savedTexts.map((text, index) => (
              <div
                key={index}
                className="border-0 border-bottom border-gray-1 pb-3"
              >
                <div className="d-flex justify-content-between align-items-top">
                  <div className="text-uppercase text-strong d-flex gap-3 align-items-center ">
                    {/* <TextIcon size={16} /> */}
                    <i className="fa fa-file-text-o" aria-hidden="true"></i>
                    {!text.title
                      ? "No title"
                      : text.title.length < 25
                      ? text.title
                      : `${text.title.slice(0, 25)}...`}
                  </div>
                  <div className="">
                    <button
                      type="button"
                      data-text-id={text.id}
                      className="btn btn-sm text-gray-1"
                      onClick={deleteSavedText}
                    >
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                <a
                  className="text-coal-1"
                  href="#text"
                  onClick={() => {
                    console.log(text.text);
                    const generatedText = props.convertPlainTextToWords(
                      text.text
                    );
                    props.setGeneratedText(generatedText);
                    props.setGeneratedTextTitle(text.title);
                    props.setEditMode(false);
                  }}
                >
                  {text.text.length < 150
                    ? text.text
                    : text.text.split(".")[0].length < 150
                    ? `${text.text.split(".")[0]}...`
                    : `${text.text.slice(0, 150)}...`}
                </a>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>No texts saved. Try a sample instead.</div>
      </>
    );
  }
};

export default SavedTexts;
