import React, { useState } from "react";

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
    <div className="d-flex flex-column gap-2 ">
      <div className="vocab-heading text-light mb-0 text-light-yellow w-100">
        All Words
        <span className="badge bg-green-1 ms-2 text-fs-15">
          {filter === "all"
            ? props.savedWords.filter((word) => word.level !== "ignore").length
            : props.savedWords.filter(
                (word) => word.level === filter && word.level !== "ignore"
              ).length}
        </span>
      </div>
      <div className="d-flex gap-2 text-gray-1">
        <div className="">Filter:</div>
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

      <div className="text-light d-flex flex-wrap gap-2 rounded-3 bg-coal-1 p-3">
        {props.savedWords.filter((word) => {
          if (filter === "all") {
            return word.level !== "ignore";
          } else {
            return word.level === filter && word.level !== "ignore";
          }
        }).length > 0
          ? props.savedWords
              .filter((word) => {
                if (filter === "all") {
                  return word.level !== "ignore";
                } else {
                  return word.level === filter && word.level !== "ignore";
                }
              })
              .sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1))
              .slice(0, 50)
              .map((savedWord) => {
                const word = savedWord.word;
                const level = savedWord.level;
                return (
                  <span
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
          : "No words"}
      </div>
    </div>
  );
};

export default AllWords;
