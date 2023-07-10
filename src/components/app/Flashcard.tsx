import React from "react";
import AllWords from "./AllWords";
import RecentWords from "./RecentWords";

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
};

const Flashcard = (props: Props) => {
  const onClickWordHandler = () => {
    return;
  };
  return (
    <section id="flashcard" className="bg-dark min-vh-100">
      <div className="container-fluid">
        <div className="d-flex flex-column align-items-center py-5">
          <h1 className="mb-3 text-light">
            <i className="fa fa-retweet me-2" aria-hidden="true"></i>
            Flashcard
          </h1>
          <div className="row w-100 d-flex flex-column-reverse flex-md-row">
            <div className="col-12 col-md-4">
              {/* <h2 className="text-center text-light">Vocabulary</h2> */}
              <div className="d-flex flex-column gap-4">
                {/* <RecentWords
                  savedWords={props.savedWords}
                  onClickWordHandler={onClickWordHandler}
                /> */}
                <AllWords
                  savedWords={props.savedWords}
                  onClickWordHandler={onClickWordHandler}
                />
              </div>
            </div>
            <div className="col-12 col-md-8">
              <h2 className="text-center text-light">Revision</h2>
              <div className="rounded-3 border-0 p-3 p-md-5 bg-light">
                <div className="d-flex gap-5 justify-content-between align-items-center">
                  <button>Back</button>
                  <div className="card w-100 d-flex justify-content-center align-items-center">
                    Hello
                  </div>
                  <button>Next</button>
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
