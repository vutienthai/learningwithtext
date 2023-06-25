import { EditIcon, GenerateIcon } from "../utilities/svg";
import { SavedTexts } from ".";
import Samples from "./Samples";

// Firebase
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { useEffect, useState } from "react";

type Props = {
  userName: string;
  userEmail: string;
  savedTexts: { title: string; text: string; id: string; timestamp: Date }[];
  setSavedTexts: (
    texts: { title: string; text: string; id: string; timestamp: Date }[]
  ) => void;
  savedWords: { word: string; level: string; note: string }[];
  setSavedWords: (
    texts: { word: string; level: string; note: string }[]
  ) => void;
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  showSamples: boolean;
  setShowSamples: (value: boolean) => void;
  generatedText: string[][];
  setGeneratedText: (text: string[][]) => void;
  generatedTextTitle: string;
  setGeneratedTextTitle: (text: string) => void;
};

const generateID = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const MainApp = (props: Props) => {
  const [selectedWord, setSelectedWord] = useState("");
  const [selectedNote, setSelectedNote] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const savedWordLevels: any = {};
  const savedWordNotes: any = {};

  const updateDictionary = (
    savedWords: { word: string; level: string; note: string }[]
  ) => {
    savedWords.forEach((word) => {
      savedWordLevels[word.word] = word.level;
      savedWordNotes[word.word] = word.note;
    });
    console.log("savedWordLevels", savedWordLevels);
    console.log("savedWordNotes", savedWordNotes);
  };

  updateDictionary(props.savedWords);

  useEffect(() => {
    updateDictionary(props.savedWords);
  }, [selectedWord, selectedNote, selectedLevel]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  const convertPlainTextToWords = (text: string) => {
    const paragraphs = text.split("\n");
    const words = paragraphs.map((paragraph) => paragraph.split(/\s+/));
    return words;
  };

  const generateTextHandler = () => {
    const userInput = document.getElementById("user-input") as HTMLInputElement;
    const userInputTitle = document.getElementById(
      "user-input-title"
    ) as HTMLInputElement;
    const generatedText = convertPlainTextToWords(userInput.value);
    console.log("generatedText", generatedText);
    const randomId = generateID();
    const timestamp = new Date();

    props.setGeneratedText(generatedText);
    props.setGeneratedTextTitle(userInputTitle.value);
    props.setSavedTexts([
      {
        title: userInputTitle.value,
        text: userInput.value,
        id: randomId,
        timestamp: timestamp,
      },
      ...props.savedTexts,
    ]);
    props.setEditMode(false);
    props.setShowSamples(false);

    // Send data to Firebase
    updateDoc(doc(db, "users", props.userEmail), {
      savedTexts: [
        {
          id: randomId,
          timestamp: timestamp,
          title: userInputTitle.value,
          text: userInput.value,
        },
        ...props.savedTexts,
      ],
    });
  };

  const newTextHandler = () => {
    props.setEditMode(true);
  };

  const onClickWordHandler = (e: any) => {
    const selectedWord = e.target.innerText.toLowerCase();
    const selectedNote = savedWordNotes[selectedWord];
    const selectedLevel = savedWordLevels[selectedWord];
    console.log("selectedWord", selectedWord);
    console.log("selectedNote", selectedNote);
    console.log("selectedLevel", selectedLevel);

    if (selectedNote) {
      console.log("selectedNote", selectedNote);
      setSelectedNote(selectedNote);
    } else {
      console.log("no note");
      setSelectedNote("no note");
    }
    if (selectedLevel) {
      console.log("selectedLevel", selectedLevel);
      setSelectedLevel(selectedLevel);
    } else {
      console.log("no level");
      setSelectedLevel("no level");
    }
    // console.log("selectedNote", selectedNote);
    // console.log("selectedLevel", selectedLevel);
    setSelectedWord(selectedWord);

    // savedWordNotes[selectedWord]
    //   ? setSelectedNote(savedWordNotes[selectedWord])
    //   : setSelectedNote("");
    // savedWordLevels[selectedWord]
    //   ? setSelectedLevel(savedWordLevels[selectedWord])
    //   : setSelectedLevel("");
    // console.log("selectedLevel", selectedLevel);
    // console.log("selectedNote", selectedNote);
  };

  const updateSelectedWord = () => {
    const levelElement = document.querySelector(
      'input[name="inlineRadioOptions"]:checked'
    ) as HTMLInputElement;
    const noteElement = document.getElementById(
      "word-note"
    ) as HTMLInputElement;
    const updatedLevel = levelElement.value;
    const updatedNote = noteElement.value;
    console.log("updatedLevel", updatedLevel);
    console.log("updatedNote", updatedNote);
    console.log("savedWords", props.savedWords);
    const tempSavedWords = [...props.savedWords];
    const wordIndex = tempSavedWords.findIndex(
      (word) => word.word === selectedWord
    );
    console.log("wordIndex", wordIndex);

    if (wordIndex !== -1) {
      tempSavedWords[wordIndex].level = updatedLevel;
      tempSavedWords[wordIndex].note = updatedNote;
    } else {
      tempSavedWords.push({
        word: selectedWord,
        level: updatedLevel,
        note: updatedNote,
      });
    }
    updateDictionary(tempSavedWords);
    props.setSavedWords(tempSavedWords);
  };

  return (
    <section id="main-app" className="bg-dark min-vh-100">
      <div className="row p-4">
        <div className="col-12 col-lg-8 p-3 my-4 my-lg-2">
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
                className="form-control rounded-2 border-0 px-3 px-md-5"
              />
              <textarea
                id="user-input"
                placeholder="Text"
                className="form-control rounded-2 border-0 p-3 p-md-5"
                rows={15}
              />
            </div>
            <button
              id="generate-btn"
              className="btn btn-green-1 text-light-yellow rounded-5 d-flex justify-content-center align-items-center gap-2"
              onClick={generateTextHandler}
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
                className="rounded-2 border-0 p-3 p-md-5 bg-light"
              >
                <h3>{props.generatedTextTitle}</h3>
                {props.generatedText.map((paragraph, pIndex) =>
                  paragraph.map((word, wIndex) => (
                    <>
                      {pIndex > 0 && wIndex === 0 ? <br /> : <></>}
                      <span
                        key={wIndex}
                        className={`${word.toLowerCase()} ${
                          savedWordLevels[word.toLowerCase()]
                            ? "level-" + savedWordLevels[word.toLowerCase()]
                            : "level-0"
                        }`}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-content="And here's some amazing content. It's very engaging. Right?"
                        data-word={word.toLowerCase()}
                        onClick={onClickWordHandler}
                      >
                        {word}
                      </span>{" "}
                    </>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4 p-3 my-4 my-lg-2 ">
          <div className="d-flex">
            <div
              className={`btn rounded-0 h3 mb-0 text-light-yellow w-50 ${
                props.showSamples ? "btn-outline-yellow-1" : "btn-yellow-1"
              }`}
              onClick={() => {
                props.setShowSamples(false);
              }}
            >
              Your Texts
            </div>
            <div
              className={`btn rounded-0 h3 mb-0 text-light-yellow w-50 ${
                props.showSamples ? "btn-yellow-1" : "btn-outline-yellow-1"
              }`}
              onClick={() => {
                props.setShowSamples(true);
              }}
            >
              Samples
            </div>
          </div>

          <div className="bg-yellow-1 p-3">
            {props.showSamples ? (
              <Samples
                setGeneratedText={props.setGeneratedText}
                setGeneratedTextTitle={props.setGeneratedTextTitle}
                setEditMode={props.setEditMode}
                convertPlainTextToWords={convertPlainTextToWords}
              />
            ) : (
              <SavedTexts
                savedTexts={props.savedTexts}
                setGeneratedText={props.setGeneratedText}
                setGeneratedTextTitle={props.setGeneratedTextTitle}
                setEditMode={props.setEditMode}
                convertPlainTextToWords={convertPlainTextToWords}
              />
            )}
          </div>
        </div>
      </div>
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
                {selectedWord}
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
                  <h5 className="text-coal-1">Note</h5>
                  <div>{selectedNote}</div>
                  <div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="word-note"
                        rows={3}
                        defaultValue={selectedNote}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-coal-1">Level</h5>
                  <div>{selectedLevel}</div>
                  <div className="d-flex flex-column">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadioIgnore"
                        defaultValue="ignore"
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
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        <span className="level-1">{selectedWord}</span>
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        defaultValue="2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        <span className="level-2">{selectedWord}</span>
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        defaultValue="3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3"
                      >
                        <span className="level-3">{selectedWord}</span>
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio4"
                        defaultValue="4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio4"
                      >
                        <span className="level-4">{selectedWord}</span>
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio5"
                        defaultValue="5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio5"
                      >
                        <span className="level-5">{selectedWord}</span>
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadioMaster"
                        defaultValue="master"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadioMaster"
                      >
                        <span className="level-master">Master</span>
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
    </section>
  );
};

export default MainApp;
