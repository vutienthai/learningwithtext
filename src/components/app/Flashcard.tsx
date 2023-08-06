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
    document.getElementById("flashcard")?.classList.remove("flipped");
    document.getElementById("flashcard-front")?.classList.remove("flipped");
    document.getElementById("flashcard-front")?.classList.remove("d-none");
    document.getElementById("flashcard-back")?.classList.add("d-none");
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
    <section
      id="section-flashcard"
      className="rounded-5 my-2 bg-dark min-vh-100"
    >
      <div className="container-fluid">
        <div className="py-5">
          <div className="w-100">
            <h1 className="text-center text-light mb-3">
              <i className="fa fa-retweet me-2" aria-hidden="true"></i>
              Flashcard
            </h1>
            <div className="d-flex flex-column gap-3 justify-content-between align-items-center">
              <div
                id="flashcard"
                className="flashcard d-flex justify-content-center align-items-center"
              >
                <div
                  id="flashcard-front"
                  className="d-flex align-items-center justify-content-center card p-3 bg-green-1 w-100"
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
                    <div className="d-flex align-items-center justify-content-center fs-1">
                      {selectedWord}
                    </div>
                  </div>
                </div>
                <div
                  id="flashcard-back"
                  className="d-flex align-items-center justify-content-center card p-3 bg-green-1 w-100 d-none flipped"
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
              <button
                onClick={onClickNextHandler}
                id="next-btn"
                className="btn btn-yellow-1 rounded-5 d-flex justify-content-center align-items-center gap-2 py-1 fs-5"
              >
                Next
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </button>
            </div>
            {/* <div className="d-flex flex-column gap-4">
              <AllWordsFlashcard
                savedWords={props.savedWords}
                onClickWordHandler={onClickWordHandler}
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flashcard;
