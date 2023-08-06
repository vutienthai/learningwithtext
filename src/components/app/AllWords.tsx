import React, { useState } from "react";
import { Link } from "react-router-dom";

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

type ModalProps = {
  level: string;
  filter: string;
  onChangeFilterOption: (e: any) => void;
};

const LevelFilterOption = (props: ModalProps) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        name="filterOptions"
        id={`filter${props.level}`}
        checked={props.filter === props.level}
        defaultValue={props.level}
        onChange={props.onChangeFilterOption}
      />
      <label className="form-check-label" htmlFor={`filter${props.level}`}>
        <span className={`position-relative`}>{props.level}</span>
      </label>
    </div>
  );
};

const AllWords = (props: Props) => {
  const [filter, setFilter] = useState("all");

  const onChangeFilterOption = (e: any) => {
    setFilter(e.target.value);
  };
  return (
    <div className="d-flex flex-column gap-3">
      <div className="vocab-heading mb-0 text-light-yellow">
        You have learnt
        <span className="badge bg-green-1 mx-2 fs-5">
          {filter === "all"
            ? props.savedWords.filter((word) => word.level !== "ignore").length
            : props.savedWords.filter(
                (word) => word.level === filter && word.level !== "ignore"
              ).length}
        </span>
        words
      </div>
      <div className="d-flex gap-3 text-gray-1">
        <div className="">Level</div>
        <div className="">
          <LevelFilterOption
            level={"1"}
            filter={filter}
            onChangeFilterOption={onChangeFilterOption}
          />
          <LevelFilterOption
            level={"2"}
            filter={filter}
            onChangeFilterOption={onChangeFilterOption}
          />
          <LevelFilterOption
            level={"3"}
            filter={filter}
            onChangeFilterOption={onChangeFilterOption}
          />
          <LevelFilterOption
            level={"4"}
            filter={filter}
            onChangeFilterOption={onChangeFilterOption}
          />
          <LevelFilterOption
            level={"5"}
            filter={filter}
            onChangeFilterOption={onChangeFilterOption}
          />
          <LevelFilterOption
            level={"master"}
            filter={filter}
            onChangeFilterOption={onChangeFilterOption}
          />
          <LevelFilterOption
            level={"all"}
            filter={filter}
            onChangeFilterOption={onChangeFilterOption}
          />
        </div>
      </div>

      <div className="">
        {props.savedWords.filter((word) => {
          if (filter === "all") {
            return word.level !== "ignore";
          } else {
            return word.level === filter && word.level !== "ignore";
          }
        }).length > 0 ? (
          <div className="d-flex flex-column gap-5">
            <div className="text-light d-flex flex-wrap gap-2">
              {props.savedWords
                .filter((word) => {
                  if (filter === "all") {
                    return word.level !== "ignore";
                  } else {
                    return word.level === filter && word.level !== "ignore";
                  }
                })
                .sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1))
                .map((savedWord) => {
                  const word = savedWord.word;
                  const level = savedWord.level;
                  return (
                    <span
                      key={word}
                      className={`${word} level-${level} rounded-2 px-2 position-relative`}
                      data-bs-toggle="modal"
                      data-bs-target="#wordModal"
                      data-bs-content={word}
                      onClick={props.onClickWordHandler}
                    >
                      {word}
                    </span>
                  );
                })}
            </div>
            <div>
              <Link
                to={"/flashcard"}
                id="learn-with-flashcard-btn"
                className="btn btn-outline-yellow-1 text-light-yellow rounded-5 d-flex justify-content-center align-items-center gap-2 py-1"
              >
                <i className="fa fa-leanpub me-1" aria-hidden="true"></i> Learn
                with Flashcard
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-light">No words</div>
        )}
      </div>
    </div>
  );
};

export default AllWords;
