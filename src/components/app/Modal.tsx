import { db } from "../../services/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

type Props = {
  userEmail: string;
  wordDefinitions: { [key: string]: string };
  wordExamples: { [key: string]: string };

  savedWords: {
    id: string;
    word: string;
    level: string;
    note: string;
    timestamp: Date;
  }[];
  setSavedWords: (
    words: {
      id: string;
      word: string;
      level: string;
      note: string;
      timestamp: Date;
    }[]
  ) => void;

  savedTimestamps: { [key: string]: Date };

  selectedWord: string;
  selectedLevel: string;
  setSelectedLevel: (value: string) => void;
  selectedNote: string;
  setSelectedNote: (value: string) => void;
  selectedTimestamp: Date;
  setSelectedTimestamp: (value: Date) => void;

  stopwords: string[];
  currentTimestamp: Date;
  setCurrentTimestamp: (value: Date) => void;
};

const generateID = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const Modal = (props: Props) => {
  const onChangeNote = (e: any) => {
    props.setSelectedNote(e.target.value);
  };

  const onChangeOption = (e: any) => {
    props.setSelectedLevel(e.target.value);
  };

  const updateSelectedWord = () => {
    const noteElement = document.getElementById(
      "word-note"
    ) as HTMLInputElement;
    const levelElement = document.querySelector(
      'input[name="inlineRadioOptions"]:checked'
    ) as HTMLInputElement;
    const updatedNote = noteElement.value;
    const updatedLevel = levelElement ? levelElement.value : "";
    console.log("updatedLevel", updatedLevel);
    console.log("updatedNote", updatedNote);
    console.log("savedWords", props.savedWords);
    const tempSavedWords = [...props.savedWords];
    const wordIndex = tempSavedWords.findIndex(
      (word) => word.word === props.selectedWord
    );
    console.log("wordIndex", wordIndex);

    let updatedWord;
    let wordID;
    const timestamp = new Date();
    console.log("timestamp", timestamp);
    props.setSelectedTimestamp(timestamp);
    props.setCurrentTimestamp(timestamp);

    if (wordIndex === -1) {
      wordID = generateID();
      updatedWord = {
        id: wordID,
        word: props.selectedWord,
        note: updatedNote,
        level: updatedLevel,
        timestamp: timestamp,
      };

      tempSavedWords.unshift(updatedWord);
    } else {
      tempSavedWords[wordIndex].note = updatedNote;
      tempSavedWords[wordIndex].level = updatedLevel;
      tempSavedWords[wordIndex].timestamp = timestamp;
      wordID = tempSavedWords[wordIndex].id;
      updatedWord = {
        id: wordID,
        word: props.selectedWord,
        note: updatedNote,
        level: updatedLevel,
        timestamp: timestamp,
      };
    }
    // Update savedWords state
    props.setSavedWords(tempSavedWords);
    // Update word in Firebase
    const userCollectionPath = `users/${props.userEmail}/wordCollection`;
    setDoc(doc(db, userCollectionPath, wordID), updatedWord);
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div
              className="fs-3 modal-title text-charcoal-1"
              id="exampleModalLabel"
            >
              <div className="">
                <div className="d-flex gap-2 align-items-center ">
                  {props.wordDefinitions[props.selectedWord] ? (
                    <span className="badge bg-green-1 text-fs-13">
                      <i className="fa fa-key me-2" aria-hidden="true"></i>
                      Must Learn
                    </span>
                  ) : props.stopwords.includes(props.selectedWord) ? (
                    <span className="badge bg-coal-1 text-fs-13">
                      <i
                        className="fa fa-hand-paper-o me-2"
                        aria-hidden="true"
                      ></i>
                      Stop Word
                    </span>
                  ) : (
                    ""
                  )}
                  {props.selectedWord}
                </div>
                <div className="text-coal-1 text-fs-13">
                  {props.savedTimestamps[props.selectedWord] ? (
                    <span>
                      <i className="fa fa-clock-o me-1" aria-hidden="true"></i>{" "}
                      Last modified:{" "}
                      {Math.round(
                        (props.currentTimestamp.getTime() -
                          new Date(props.selectedTimestamp).getTime()) /
                          (1000 * 60 * 60 * 24)
                      )}{" "}
                      day(s) ago.
                    </span>
                  ) : (
                    <span>
                      <i className="fa fa-smile-o me-1" aria-hidden="true"></i>{" "}
                      New word found. Learn it now!
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column gap-3">
              <div>
                {props.wordDefinitions[props.selectedWord] ? (
                  <>
                    <h5 className="text-coal-1 opacity-25">Definition</h5>
                    <div className="mb-4">
                      {props.wordDefinitions[props.selectedWord]}
                    </div>
                  </>
                ) : (
                  ""
                )}
                {props.wordExamples[props.selectedWord] ? (
                  <>
                    {" "}
                    <h5 className="text-coal-1 opacity-25">Example</h5>
                    <div className="mb-4">
                      {props.wordExamples[props.selectedWord]}
                    </div>
                  </>
                ) : (
                  ""
                )}

                <h5 className="text-coal-1 opacity-25">Note</h5>
                <div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="word-note"
                      rows={3}
                      value={props.selectedNote}
                      onChange={onChangeNote}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-coal-1 opacity-25">Level</h5>
                <div className="d-flex flex-wrap">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadioIgnore"
                      defaultValue="ignore"
                      checked={props.selectedLevel === "ignore"}
                      onChange={onChangeOption}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineRadioIgnore"
                    >
                      <span className="level-ignore">Ignore</span>
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      defaultValue="1"
                      checked={props.selectedLevel === "1"}
                      onChange={onChangeOption}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      <span className="">{1}</span>
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      defaultValue="2"
                      checked={props.selectedLevel === "2"}
                      onChange={onChangeOption}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      <span className="">{2}</span>
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      defaultValue="3"
                      checked={props.selectedLevel === "3"}
                      onChange={onChangeOption}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3">
                      <span className="">{3}</span>
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio4"
                      defaultValue="4"
                      checked={props.selectedLevel === "4"}
                      onChange={onChangeOption}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio4">
                      <span className="">{4}</span>
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio5"
                      defaultValue="5"
                      checked={props.selectedLevel === "5"}
                      onChange={onChangeOption}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio5">
                      <span className="">{5}</span>
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadioMaster"
                      defaultValue="master"
                      checked={props.selectedLevel === "master"}
                      onChange={onChangeOption}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineRadioMaster"
                    >
                      <span className="">Master</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={updateSelectedWord}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
