import { db } from "../../services/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

import CambridgeDictionaryLogo from "../../assets/cambridge-dictionary-logo.png";
import MWDictionaryLogo from "../../assets/merriam-webster-logo.png";
import ModalWordLevel from "./ModalWordLevel";
import { API_URL } from "../../services/dictionaryAPT";
import { useState } from "react";
import InlineLoader from "../shared/InlineLoader";

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
  const [loading, setLoading] = useState(false);

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

  const lookupWord = async (word: string) => {
    setLoading(true);
    try {
      const result = await fetch(API_URL(word));
      const data = await result.json();
      console.log("data", data);

      const pronunciation = data[0]["hwi"]["prs"]
        ? data[0]["hwi"]["prs"]
            .map((prs: { ipa: string }) => prs.ipa)
            .join(" | ")
        : "";
      const definition = data[0]["shortdef"]
        .map((def: string, index: number) => {
          return `${index + 1}. ${def}`;
        })
        .join("\n");

      const newNote = pronunciation
        ? `${pronunciation}\n---\n${definition}`
        : definition;
      props.setSelectedNote(newNote);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      props.setSelectedNote("No definition found.");
      setLoading(false);
    }
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
            <div className="d-flex flex-column gap-2">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <div className="d-flex gap-2">
                  <a
                    href={`https://dictionary.cambridge.org/dictionary/english/${props.selectedWord}`}
                    target="__blank"
                  >
                    <img
                      className="dict-logo"
                      src={CambridgeDictionaryLogo}
                      alt="cambridge-dictionary-logo"
                    />
                  </a>
                  <a
                    href={`https://www.merriam-webster.com/dictionary/${props.selectedWord}`}
                    target="__blank"
                  >
                    <img
                      className="dict-logo"
                      src={MWDictionaryLogo}
                      alt="merriam-webster-dictionary-logo"
                    />
                  </a>
                </div>
                <div className="d-flex">
                  <div className={loading ? "d-none" : "d-inline"}>
                    <div className={props.selectedNote ? "d-none" : ""}>
                      {" "}
                      <button
                        onClick={() => lookupWord(props.selectedWord)}
                        className="btn btn-sm btn-outline-primary"
                      >
                        Look up and save as note
                      </button>
                    </div>
                  </div>

                  <div
                    className={
                      loading
                        ? "d-flex align-items-center justify-content-center"
                        : "d-none"
                    }
                  >
                    <InlineLoader />
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column">
                {/* {props.wordDefinitions[props.selectedWord] ? (
                  <div>
                    <h5 className="text-coal-1 opacity-25">Definition</h5>
                    <div className="mb-4">
                      {props.wordDefinitions[props.selectedWord]}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {props.wordExamples[props.selectedWord] ? (
                  <div>
                    <h5 className="text-coal-1 opacity-25">Example</h5>
                    <div className="mb-4">
                      {props.wordExamples[props.selectedWord]}
                    </div>
                  </div>
                ) : (
                  <></>
                )} */}
                <div>
                  <h5 className="text-coal-1 opacity-25">Note</h5>
                  <div className="mb-3">
                    <textarea
                      className="form-control text-fs-13"
                      id="word-note"
                      rows={7}
                      value={props.selectedNote}
                      onChange={onChangeNote}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-coal-1 opacity-25">Level</h5>
                <div className="d-flex flex-column gap-2">
                  <div>
                    <ModalWordLevel
                      level={"1"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={onChangeOption}
                    />
                    <ModalWordLevel
                      level={"2"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={onChangeOption}
                    />
                    <ModalWordLevel
                      level={"3"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={onChangeOption}
                    />
                    <ModalWordLevel
                      level={"4"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={onChangeOption}
                    />
                    <ModalWordLevel
                      level={"5"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={onChangeOption}
                    />
                  </div>

                  <div>
                    <ModalWordLevel
                      level={"master"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={onChangeOption}
                    />
                    <ModalWordLevel
                      level={"ignore"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={onChangeOption}
                    />
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
