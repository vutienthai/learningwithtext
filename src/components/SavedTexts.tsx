import { TextIcon } from "../utilities/svg";

type Props = {
  savedTexts: { title: string; text: string }[];
  setSavedTexts: (texts: { title: string; text: string }[]) => void;
  setGeneratedText: (text: string[]) => void;
};

const SavedTexts = (props: Props) => {
  return (
    <>
      <div className="d-flex flex-column gap-3">
        <h2 className="text-light">Your Saved Texts:</h2>
        <div className="d-flex flex-column gap-2">
          {props.savedTexts.map((text, index) => (
            <div
              key={index}
              className="bg-light-yellow p-2 rounded-3"
              onClick={() => {
                console.log(text.text);
                props.setGeneratedText(text.text.split(/\s+/));
              }}
            >
              <div className="text-uppercase text-strong d-flex gap-2 align-items-center">
                <TextIcon size={16} />
                {text.title ? text.title : "No title"}
              </div>{" "}
              <div>{text.text.slice(0, 100)}...</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SavedTexts;
