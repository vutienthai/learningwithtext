import React from "react";

type Props = {
  savedWords: {
    id: string;
    word: string;
    level: string;
    note: string;
    timestamp: Date;
  }[];
  onClickWordHandler: (e: any) => void;
};

const RecentWords = (props: Props) => {
  return (
    <div className="d-flex flex-column gap-3">
      <div className="vocab-heading mb-0 text-light-yellow">Recent Words</div>
      <div className="text-light d-flex flex-wrap gap-2">
        {props.savedWords.filter((word) => word.level !== "ignore").length >
        0 ? (
          props.savedWords
            .filter((word) => word.level !== "ignore")
            .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
            .slice(0, 10)
            .map((savedWord) => {
              const word = savedWord.word;
              const level = savedWord.level;
              return (
                <span
                  key={word}
                  className={`${word} level-${level} rounded-2 px-2 position-relative`}
                  data-bs-toggle="modal"
                  data-bs-target="#wordModal"
                  data-bs-content="???"
                  onClick={props.onClickWordHandler}
                >
                  {word}
                </span>
              );
            })
        ) : (
          <div className="text-light">No words</div>
        )}
      </div>
    </div>
  );
};

export default RecentWords;
