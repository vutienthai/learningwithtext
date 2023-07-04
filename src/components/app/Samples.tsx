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
              className="border-0 border-bottom border-gray-1 pb-3 mb-2"
              onClick={() => {
                const generatedText = props.convertPlainTextToWords(text.text);
                props.setGeneratedText(generatedText);
                props.setGeneratedTextTitle(text.title);
                props.setEditMode(false);
              }}
            >
              <div className="text-uppercase text-strong d-flex gap-2 align-items-center">
                <TextIcon size={16} />
                {!text.title
                  ? "No title"
                  : text.title.length < 25
                  ? text.title
                  : `${text.title.slice(0, 25)}...`}
              </div>
              <div className="text-coal-1">
                {text.text.split(".")[0].length < 150
                  ? text.text.split(".")[0]
                  : text.text.slice(0, 150)}
                ...
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Samples;
