import { textSamples } from "../../services/textSamples";
import { TextIcon } from "../../utilities/svg";

type Props = {
  setGeneratedText: (text: string[][]) => void;
  setGeneratedTextTitle: (text: string) => void;
  setEditMode: (value: boolean) => void;
  convertPlainTextToWords: (text: string) => string[][];
};

const Samples = (props: Props) => {
  return (
    <>
      <div className="d-flex flex-column gap-3">
        <div className="d-flex flex-column gap-2">
          {textSamples.map((text, index) => (
            <div
              key={index}
              className="border-0 border-bottom border-gray-1 pb-3"
            >
              <div className="d-flex justify-content-between align-items-top">
                <div className="text-uppercase text-strong d-flex gap-3 align-items-center ">
                  {/* <TextIcon size={16} /> */}
                  <i className="fa fa-file-text-o" aria-hidden="true"></i>
                  {!text.title
                    ? "No title"
                    : text.title.length < 25
                    ? text.title
                    : `${text.title.slice(0, 25)}...`}
                </div>
                <div className=""></div>
              </div>
              <div
                className="text-coal-1"
                onClick={() => {
                  console.log(text.text);
                  const generatedText = props.convertPlainTextToWords(
                    text.text
                  );
                  props.setGeneratedText(generatedText);
                  props.setGeneratedTextTitle(text.title);
                  props.setEditMode(false);
                }}
              >
                {text.text.length < 150
                  ? text.text
                  : text.text.split(".")[0].length < 150
                  ? `${text.text.split(".")[0]}...`
                  : `${text.text.slice(0, 150)}...`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Samples;
