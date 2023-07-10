import { db } from "../../services/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

import CambridgeDictionaryLogo from "../../assets/cambridge-dictionary-logo.png";
import MWDictionaryLogo from "../../assets/merriam-webster-logo.png";
import YouglishLogo from "../../assets/youglish-logo.png";
import WordLevelOption from "./WordLevelOption";
import { API_URL } from "../../services/dictionaryAPI";
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
  selectedAudio: string;
  setSelectedAudio: (value: string) => void;
  selectedSentence: string;
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
      'input[name="levelOptions"]:checked'
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

  const lookupAndSaveToNote = async (word: string) => {
    setLoading(true);
    try {
      const result = await fetch(API_URL(word));
      const data = await result.json();
      console.log("data", data);
      const audio = "https://www.w3schools.com/jsref/horse.ogg";
      props.setSelectedAudio(audio);
      const definition = data
        .map(
          (word: {
            phonetic: string;
            meanings: {
              partOfSpeech: string;
              definitions: { definition: string }[];
            }[];
          }) => {
            const pronunciation = word.phonetic;
            const meanings = word.meanings
              .map(
                (meaning: {
                  partOfSpeech: string;
                  definitions: { definition: string }[];
                }) => {
                  const partOfSpeech = `${meaning.partOfSpeech}`;
                  const definitions = `${meaning.definitions
                    .map(
                      (def: { definition: string }, index: number) =>
                        `${index + 1}. ${def.definition}`
                    )
                    .join("\n")}`;
                  return `${partOfSpeech}\n${definitions}\n`;
                }
              )
              .join("\n");
            return pronunciation
              ? `${pronunciation}\n---\n${meanings}`
              : meanings;
          }
        )
        .join("\n=========================\n");

      props.setSelectedNote(definition);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      props.setSelectedNote("No definition found.");
      setLoading(false);
    }
  };

  const clearNote = () => {
    props.setSelectedNote("");
  };

  return (
    <div
      className="modal fade"
      id="wordModal"
      tabIndex={-1}
      aria-labelledby="wordModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div
              className="fs-3 modal-title text-charcoal-1"
              id="wordModalLabel"
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
                  <div>
                    {props.selectedAudio ? (
                      <button
                        className="btn"
                        onClick={() => {
                          new Audio(props.selectedAudio).play();
                        }}
                      >
                        <i className="fa fa-volume-up" aria-hidden="true"></i>
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
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
              <div className="d-flex flex-wrap gap-3 mb-3">
                <h5 className="text-coal-1 opacity-25 m-0">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </h5>
                <div className="d-flex gap-3">
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
                  <a
                    href={`https://youglish.com/pronounce/${props.selectedWord}/english`}
                    target="__blank"
                  >
                    <img
                      className="dict-logo"
                      src={YouglishLogo}
                      alt="youglish-logo"
                    />
                  </a>
                </div>
              </div>
              <div>
                {props.selectedSentence ? (
                  <div>
                    <h5 className="text-coal-1 opacity-25 mb-2">Sentence</h5>
                    <div className="text-coal-1 opacity-75">
                      {props.selectedSentence}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <div className="d-flex flex-column">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h5 className="text-coal-1 opacity-25 m-0">Note</h5>
                    <div className="d-flex">
                      <div className={loading ? "d-none" : "d-inline"}>
                        <div className={props.selectedNote ? "d-none" : ""}>
                          <button
                            onClick={() =>
                              lookupAndSaveToNote(props.selectedWord)
                            }
                            className="btn btn-sm btn-outline-primary text-fs-11"
                          >
                            <i
                              className="fa fa-search me-1"
                              aria-hidden="true"
                            ></i>
                            Look Up & Save to Note
                          </button>
                        </div>
                        <div className={props.selectedNote ? "" : "d-none"}>
                          <button
                            onClick={() => clearNote()}
                            className="btn btn-sm btn-outline-gray-1 text-fs-11"
                          >
                            <i
                              className="fa fa-eraser me-1"
                              aria-hidden="true"
                            ></i>
                            Clear Note
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
                <h5 className="text-coal-1 opacity-25 mb-2">Level</h5>
                <div className="d-flex flex-column gap-2">
                  <div>
                    <WordLevelOption
                      level={"1"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={onChangeOption}
                    />
                    <WordLevelOption
                      level={"2"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={onChangeOption}
                    />
                    <WordLevelOption
                      level={"3"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={onChangeOption}
                    />
                    <WordLevelOption
                      level={"4"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={onChangeOption}
                    />
                    <WordLevelOption
                      level={"5"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={onChangeOption}
                    />
                  </div>

                  <div>
                    <WordLevelOption
                      level={"master"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={onChangeOption}
                    />
                    <WordLevelOption
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
