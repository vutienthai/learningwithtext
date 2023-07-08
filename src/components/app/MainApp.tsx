import { useEffect, useState } from "react";

import Modal from "./Modal";
import { EditIcon, GenerateIcon, NewsIcon } from "../../utilities/svg";
import { SavedTexts } from "..";
import Samples from "./Samples";
import vocabulary from "../../services/vocabulary/all_vocab.json";
import { stopwords } from "../../services/vocabulary/stopwords.ts";

// Firebase
import { db } from "../../services/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const transformWord = (word: string) => {
  return word
    .split(/[:–.?;,!"“”‘’()%]/)
    .join("")
    .toLowerCase();
};

type Props = {
  userName: string;
  userEmail: string;

  savedTexts: { title: string; text: string; id: string; timestamp: Date }[];
  setSavedTexts: (
    texts: { id: string; title: string; text: string; timestamp: Date }[]
  ) => void;

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

  savedNotes: { [key: string]: string };
  savedLevels: { [key: string]: string };
  savedTimestamps: { [key: string]: Date };

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
  console.log("stopwords", stopwords);

  const [selectedWord, setSelectedWord] = useState("");
  const [selectedNote, setSelectedNote] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedTimestamp, setSelectedTimestamp] = useState(new Date());
  const [currentTimestamp, setCurrentTimestamp] = useState(new Date());

  const wordDefinitions: { [key: string]: string } = {};
  const wordExamples: { [key: string]: string } = {};

  vocabulary.forEach(
    (word: { word: string; definition: string; example: string }) => {
      wordDefinitions[word.word] = word.definition;
      wordExamples[word.word] = word.example;
    }
  );

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
    const textID = generateID();
    const timestamp = new Date();
    const newText = {
      id: textID,
      title: userInputTitle.value,
      text: userInput.value,
      timestamp: timestamp,
    };
    props.setGeneratedText(generatedText);
    props.setGeneratedTextTitle(userInputTitle.value);
    props.setSavedTexts([newText, ...props.savedTexts]);
    props.setEditMode(false);
    props.setShowSamples(false);

    // Add text to Firebase
    const userCollectionPath = `users/${props.userEmail}/textCollection`;
    setDoc(doc(db, userCollectionPath, textID), newText);

    // updateDoc(doc(db, "users", props.userEmail), {
    //   savedTexts: [
    //     {
    //       id: textID,
    //       timestamp: timestamp,
    //       title: userInputTitle.value,
    //       text: userInput.value,
    //     },
    //     ...props.savedTexts,
    //   ],
    // });
  };

  const newTextHandler = () => {
    props.setEditMode(true);
  };

  const onClickWordHandler = (e: any) => {
    const selectedWord = e.target.innerText.toLowerCase();
    setSelectedWord(selectedWord);

    const selectedNote = props.savedNotes[selectedWord];
    const selectedLevel = props.savedLevels[selectedWord];
    const selectedTimestamp = props.savedTimestamps[selectedWord];
    selectedNote ? setSelectedNote(selectedNote) : setSelectedNote("");
    selectedLevel ? setSelectedLevel(selectedLevel) : setSelectedLevel("");
    selectedTimestamp
      ? setSelectedTimestamp(selectedTimestamp)
      : setSelectedTimestamp(new Date());
  };

  return (
    <section id="main-app" className="bg-dark min-vh-100">
      <div className="row p-4">
        <div className="col-12 col-lg-3 p-3 my-4 my-lg-2">
          <div className="d-flex flex-column gap-3">
            <h3 className="text-light m-0">Your vocabulary</h3>
            <div className="d-flex flex-column gap-2 rounded-3 bg-coal-1 p-3">
              <div className="vocab-heading text-light mb-0 text-light-yellow w-100">
                Recent Words
              </div>
              <div className="text-light d-flex flex-wrap gap-2">
                {props.savedWords.length > 0
                  ? props.savedWords
                      .filter((word) => word.level !== "ignore")
                      .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
                      .slice(0, 10)
                      .map((savedWord) => {
                        const word = savedWord.word;
                        const level = savedWord.level;
                        return (
                          <span
                            className={`${word} level-${level} rounded-2 px-2 position-relative`}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            data-bs-content="???"
                            onClick={onClickWordHandler}
                          >
                            {word}
                          </span>
                        );
                      })
                  : "No words"}
              </div>
            </div>
            <div className="d-flex flex-column gap-2 rounded-3 bg-coal-1 p-3">
              <div className="vocab-heading text-light mb-0 text-light-yellow w-100">
                All Words{" "}
                <span className="badge bg-green-1 text-fs-15">
                  {
                    props.savedWords.filter((word) => word.level !== "ignore")
                      .length
                  }
                </span>
              </div>
              <div className="text-light d-flex flex-wrap gap-2">
                {props.savedWords.length > 0
                  ? props.savedWords
                      .filter((word) => word.level !== "ignore")
                      .sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1))
                      .slice(0, 50)
                      .map((savedWord) => {
                        const word = savedWord.word;
                        const level = savedWord.level;
                        return (
                          <span
                            className={`${word} level-${level} rounded-2 px-2 position-relative`}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            data-bs-content="???"
                            onClick={onClickWordHandler}
                          >
                            {word}
                          </span>
                        );
                      })
                  : "No words"}
              </div>
            </div>
          </div>
        </div>
        <div id="text" className="col-12 col-lg-6 p-3 my-4 my-lg-2">
          <div
            id="user-input-container"
            className={`d-flex flex-column gap-3 ${
              props.editMode ? "" : "d-none"
            }`}
          >
            <h3 className="text-light m-0">Please input your text:</h3>
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
            <div>
              <button
                id="generate-btn"
                className="btn btn-green-1 text-light-yellow rounded-5 d-flex justify-content-center align-items-center gap-2  py-1"
                onClick={generateTextHandler}
              >
                <GenerateIcon size={16} />
                Generate
              </button>
            </div>
          </div>
          <div
            id="generated-text"
            className={`d-flex flex-column gap-3 ${
              props.editMode ? "d-none" : ""
            }`}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="text-light m-0">Your text</h3>
              <button
                className="btn btn-purple-1 text-light-yellow rounded-5 d-flex justify-content-center align-items-center gap-2 py-1"
                onClick={newTextHandler}
              >
                <EditIcon size={16} />
                New Text
              </button>
            </div>
            <div className="">
              <div className="rounded-3 border-0 p-3 p-md-5 bg-light">
                <h3 className="mb-4">{props.generatedTextTitle}</h3>
                {props.generatedText.map((paragraph, pIndex) => {
                  return (
                    <div key={pIndex} className="">
                      {paragraph.map((word, wIndex) => {
                        const transformedWord = word
                          .split(/[:–.?;,!"“”‘’()%]/)
                          .join("");

                        const transformedWordLowerCase =
                          transformedWord.toLowerCase();

                        const specialCharBefore = word
                          .split(/[–1-9a-zA-Z+]/)
                          .shift();
                        const specialCharAfter = word
                          .split(/[–1-9a-zA-Z+]/)
                          .pop();

                        return (
                          <span key={wIndex}>
                            <span>{specialCharBefore}</span>
                            <span
                              className={`word ${transformedWordLowerCase} ${
                                props.savedLevels[transformedWordLowerCase]
                                  ? "level-" +
                                    props.savedLevels[transformedWordLowerCase]
                                  : stopwords.includes(transformedWordLowerCase)
                                  ? "level-ignore"
                                  : "level-0"
                              }`}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              data-bs-content="???"
                              onClick={onClickWordHandler}
                            >
                              {transformedWord}
                            </span>
                            <span>{specialCharAfter}</span>{" "}
                          </span>
                        );
                      })}
                      <br />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-3 p-3 my-4 my-lg-2">
          <div className="d-flex flex-column gap-3">
            <h3 className="text-light m-0">Your Texts</h3>
            <div className="">
              <div className="d-flex">
                <div
                  className={`text-heading btn rounded-0 mb-0 text-light-yellow w-50 border-bottom-0 d-flex align-items-center justify-content-center ${
                    props.showSamples ? "btn-outline-yellow-1" : "btn-yellow-1"
                  }`}
                  onClick={() => {
                    props.setShowSamples(false);
                  }}
                >
                  Saved Texts
                </div>
                <div
                  className={`text-heading btn rounded-0 mb-0 text-light-yellow w-50 border-bottom-0 d-flex align-items-center justify-content-center ${
                    props.showSamples ? "btn-yellow-1" : "btn-outline-yellow-1"
                  }`}
                  onClick={() => {
                    props.setShowSamples(true);
                  }}
                >
                  Samples
                </div>
              </div>

              <div className="border border-yellow-1 rounded-bottom-3 bg-light-yellow p-3">
                {props.showSamples ? (
                  <Samples
                    setGeneratedText={props.setGeneratedText}
                    setGeneratedTextTitle={props.setGeneratedTextTitle}
                    setEditMode={props.setEditMode}
                    convertPlainTextToWords={convertPlainTextToWords}
                  />
                ) : (
                  <SavedTexts
                    userEmail={props.userEmail}
                    savedTexts={props.savedTexts}
                    setSavedTexts={props.setSavedTexts}
                    setGeneratedText={props.setGeneratedText}
                    setGeneratedTextTitle={props.setGeneratedTextTitle}
                    setEditMode={props.setEditMode}
                    convertPlainTextToWords={convertPlainTextToWords}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        userEmail={props.userEmail}
        wordDefinitions={wordDefinitions}
        wordExamples={wordExamples}
        selectedWord={selectedWord}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        selectedTimestamp={selectedTimestamp}
        setSelectedTimestamp={setSelectedTimestamp}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
        savedWords={props.savedWords}
        setSavedWords={props.setSavedWords}
        stopwords={stopwords}
        currentTimestamp={currentTimestamp}
        setCurrentTimestamp={setCurrentTimestamp}
        savedTimestamps={props.savedTimestamps}
      />
    </section>
  );
};

export default MainApp;
