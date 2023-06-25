import { TextIcon } from "../utilities/svg";

type Props = {
  savedTexts: { title: string; text: string }[];
  setGeneratedText: (text: string[][]) => void;
  setGeneratedTextTitle: (text: string) => void;
  setEditMode: (value: boolean) => void;
  convertPlainTextToWords: (text: string) => string[][];
};

const SavedTexts = (props: Props) => {
  if (props.savedTexts.length > 0) {
    return (
      <>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-2">
            {props.savedTexts.map((text, index) => (
              <div
                key={index}
                className="bg-light-yellow p-2 rounded-3"
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
                <div className="text-uppercase text-strong d-flex gap-2 align-items-center">
                  <TextIcon size={16} />
                  {text.title ? text.title : "No title"}
                </div>
                <div>{text.text.slice(0, 100)}...</div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>No Texts</div>
      </>
    );
  }
};

export default SavedTexts;
