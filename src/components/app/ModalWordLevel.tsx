import React from "react";

type Props = {
  level: string;
  selectedLevel: string;
  onChangeOption: (e: any) => void;
};

const ModalWordLevel = (props: Props) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id={`inlineRadio${props.level}`}
        defaultValue={props.level}
        checked={props.selectedLevel === props.level}
        onChange={props.onChangeOption}
      />
      <label className="form-check-label" htmlFor={`inlineRadio${props.level}`}>
        <span className={`px-1 position-relative level-${props.level}`}>
          {props.level}
        </span>
      </label>
    </div>
  );
};

export default ModalWordLevel;
