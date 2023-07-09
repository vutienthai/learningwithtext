import { useState } from "react";
import { StarIcon } from "../../utilities/svg";

const Reviews = () => {
  const [introCardActive, setIntroCardActive] = useState<boolean>(false);
  const [dataCardActive, setDataCardActive] = useState<boolean>(true);
  const [webCardActive, setWebCardActive] = useState<boolean>(false);

  return (
    <div id="reviews-container" className="w-100">
      <div
        id="reviews"
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <div
          className={`title-card border-black border intro-title p-2 rounded bg-purple-1 ${
            introCardActive ? "active z-3" : ""
          }`}
          onClick={() => {
            setIntroCardActive(true);
            setDataCardActive(false);
            setWebCardActive(false);
          }}
        >
          <div className="h4 text-uppercase text-light-yellow d-flex align-items-center gap-3 ">
            My favourite online tool
          </div>
          <div className="text-strong">Gabriel Silva - Sao Paulo, Brazil</div>
          <p>
            "LWT is my favourite online tool for language learning. There is no
            better way to build vocabulary and master a language."
          </p>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
        <div
          className={`title-card border-black border data-title p-2 rounded bg-red-1 ${
            dataCardActive ? "active z-3" : "z-2"
          }`}
          onClick={() => {
            setIntroCardActive(false);
            setDataCardActive(true);
            setWebCardActive(false);
          }}
        >
          <div className="h4 text-uppercase text-light-yellow d-flex align-items-center gap-3 ">
            Achieved my dream score
          </div>
          <div className="text-strong">Phuong Nguyen - Hanoi, Vietnam</div>
          <p>
            "I decided to sit the IELTS exam after a year of using LWT, but I
            was not expecting so much success. I got 8.5 in the reading and 8 in
            the listening test!"
          </p>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
        <div
          className={`title-card border-black border web-title p-2 rounded bg-green-1 ${
            webCardActive ? "active z-3" : ""
          }
            `}
          onClick={() => {
            setIntroCardActive(false);
            setDataCardActive(false);
            setWebCardActive(true);
          }}
        >
          <div className="h4 text-uppercase text-light-yellow d-flex align-items-center gap-3 ">
            Efficient and effective
          </div>
          <div className="text-strong">Liu - Shenzhen, China</div>
          <p>
            "I really want to thank LWT so much for transforming the way I learn
            languages. The LWT system makes reading English easy, efficient and
            effective. By highlighting words and phrases, your vocabulary and
            grammar knowledge improves naturally as you read"
          </p>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
