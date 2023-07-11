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
            ></div>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column gap-2">
              <div className="d-flex flex-column">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h5 className="text-light m-0">Note</h5>
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control text-fs-13 bg-light-yellow"
                      id="word-note"
                      rows={7}
                      value={props.selectedNote}
                      onChange={() => {
                        return null;
                      }}
                    />
                  </div>
                  <div className="">
                    <div className="text-light text-fs-13">
                      <span>
                        <i
                          className="fa fa-clock-o me-1"
                          aria-hidden="true"
                        ></i>{" "}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardBack;
