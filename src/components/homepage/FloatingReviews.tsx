import { QuoteIcon, StarIcon } from "../../utilities/svg";

export const FloatingReview1 = () => {
  return (
    <div className="bg-purple-1 border border-black rounded-3 p-3 position-relative">
      <div className="quote-icon position-absolute top-0 start-0">
        <QuoteIcon color={"text-light-yellow"} />
      </div>
      <div className="text-center text-strong">Awesome!</div>
      <div className="text-center">-Ha Nguyen</div>
      <div className="text-center">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
    </div>
  );
};

export const FloatingReview2 = () => {
  return (
    <div className="bg-pink-1 border border-black rounded-3 p-3 position-relative">
      <div className="quote-icon position-absolute top-0 start-0">
        <QuoteIcon color={"text-light-yellow"} />
      </div>
      <div className="text-center text-strong">Really enjoyed it!</div>
      <div className="text-center">-Ha Nguyen</div>
      <div className="text-center">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
    </div>
  );
};
