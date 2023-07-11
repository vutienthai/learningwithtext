import { db } from "../../services/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

import CambridgeDictionaryLogo from "../../assets/cambridge-dictionary-logo.png";
import MWDictionaryLogo from "../../assets/merriam-webster-logo.png";
import YouglishLogo from "../../assets/youglish-logo.png";
import WordLevelOption from "./WordLevelOption";

type Props = {
  selectedWord: string;
  selectedLevel: string;
  selectedNote: string;
  selectedTimestamp: Date;

  currentTimestamp: Date;
};

const FlashcardBack = (props: Props) => {
  return (
    <div
      className=""
      id="flashcardModal"
      tabIndex={-1}
      aria-labelledby="flashcardModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div
              className="fs-3 modal-title text-charcoal-1"
              id="flashcardModalLabel"
            >
              <div className="">
                <div className="d-flex gap-2 align-items-center ">
                  {props.selectedWord}
                </div>
                <div className="text-coal-1 text-fs-13">
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
                </div>
              </div>
            </div>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column gap-2">
              <div className="d-flex flex-column">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h5 className="text-coal-1 opacity-25 m-0">Note</h5>
                  </div>
                  <div className="mb-3">
                    {" "}
                    <textarea
                      className="form-control text-fs-13"
                      id="word-note"
                      rows={7}
                      value={props.selectedNote}
                      onChange={() => {
                        return null;
                      }}
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
                      onChangeOption={() => {
                        return null;
                      }}
                    />
                    <WordLevelOption
                      level={"2"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={() => {
                        return null;
                      }}
                    />
                    <WordLevelOption
                      level={"3"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={() => {
                        return null;
                      }}
                    />
                    <WordLevelOption
                      level={"4"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={() => {
                        return null;
                      }}
                    />
                    <WordLevelOption
                      level={"5"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={() => {
                        return null;
                      }}
                    />
                  </div>

                  <div>
                    <WordLevelOption
                      level={"master"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={() => {
                        return null;
                      }}
                    />
                    <WordLevelOption
                      level={"ignore"}
                      selectedLevel={props.selectedLevel}
                      onChangeOption={() => {
                        return null;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={updateSelectedWord}
            >
              Save
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FlashcardBack;
