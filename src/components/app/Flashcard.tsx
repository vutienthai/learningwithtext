import React, { useState } from "react";
import AllWordsFlashcard from "./AllWordsFlashcard";
import RecentWords from "./RecentWords";
import FlashcardBack from "./FlashcardBack";

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
};

const Flashcard = (props: Props) => {
  const getRandomWord = () => {
    return props.savedWords[
      Math.floor(Math.random() * props.savedWords.length)
    ];
  };
  const [randomWord, setRandomWord] = useState(getRandomWord());

  const onClickNextHandler = () => {
    setRandomWord(getRandomWord());
  };

  const selectedWord = randomWord.word;
  const selectedLevel = randomWord.level;
  const selectedNote = randomWord.note;
  const selectedTimestamp = randomWord.timestamp;
  const currentTimestamp = new Date();

  const onClickWordHandler = (e: any) => {
    console.log(e.target.getAttribute("data-bs-content"));
    setRandomWord(e.target.getAttribute("data-bs-content"));
  };

  return (
    <section id="section-flashcard" className="bg-dark min-vh-100">
      <div className="container-fluid">
        <div className="d-flex flex-column align-items-center py-5">
          <h1 className="mb-3 text-light">
            <i className="fa fa-retweet me-2" aria-hidden="true"></i>
            Flashcard
          </h1>
          <div className="row w-100 d-flex flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-4 my-3">
              {/* <h2 className="text-center text-light">Vocabulary</h2> */}
              <div className="d-flex flex-column gap-4">
                <AllWordsFlashcard
                  savedWords={props.savedWords}
                  onClickWordHandler={onClickWordHandler}
                />
              </div>
            </div>
            <div className="col-12 col-lg-8 my-3">
              <h2 className="text-center text-light">Revision</h2>
              <div className="rounded-3 border-0 p-3 p-lg-5 bg-light">
                <div className="d-flex flex-column gap-3 justify-content-between align-items-center">
                  <button onClick={onClickNextHandler} className="btn">
                    Next
                  </button>
                  <div
                    id="flashcard"
                    className="flashcard w-100 d-flex justify-content-center align-items-center"
                  >
                    <div
                      id="flashcard-front"
                      className="card border p-5 bg-blue-1 w-100"
                      onClick={() => {
                        document
                          .getElementById("flashcard")
                          ?.classList.toggle("flipped");
                        document
                          .getElementById("flashcard-front")
                          ?.classList.toggle("d-none");
                        document
                          .getElementById("flashcard-back")
                          ?.classList.toggle("d-none");
                      }}
                    >
                      <div className="text-light w-100">
                        <div className="d-flex align-items-center justify-content-center fs-3">
                          {selectedWord}
                        </div>
                      </div>
                    </div>
                    <div
                      id="flashcard-back"
                      className="card border p-5 bg-blue-1 w-100 d-none flipped"
                      onClick={() => {
                        document
                          .getElementById("flashcard")
                          ?.classList.toggle("flipped");
                        document
                          .getElementById("flashcard-front")
                          ?.classList.toggle("d-none");
                        document
                          .getElementById("flashcard-back")
                          ?.classList.toggle("d-none");
                      }}
                    >
                      <div className="text-light w-100">
                        <FlashcardBack
                          selectedWord={selectedWord}
                          selectedLevel={selectedLevel}
                          selectedNote={selectedNote}
                          selectedTimestamp={selectedTimestamp}
                          currentTimestamp={currentTimestamp}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flashcard;
