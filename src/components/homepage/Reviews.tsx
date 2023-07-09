import { useState } from "react";
import { StarIcon } from "../../utilities/svg";
import MaleUser1 from "../../assets/male_user_1.png";
import MaleUser2 from "../../assets/male_user_2.png";
import FemaleUser from "../../assets/female_user.png";

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
          className={`title-card border-black border review-1 p-2 p-md-3 rounded bg-purple-1 ${
            introCardActive ? "active z-3" : ""
          }`}
          onClick={() => {
            setIntroCardActive(true);
            setDataCardActive(false);
            setWebCardActive(false);
          }}
        >
          <div className="h4 text-uppercase text-light-yellow ">
            My favourite online tool
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={MaleUser2} alt="" className="user-img" />
            <div>
              <div className="text-strong">
                Gabriel Silva - Sao Paulo, Brazil
              </div>
              <p className="text-charcoal-1">
                LWT is my favourite online tool for language learning. There is
                no better way to build vocabulary and master a language.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
        <div
          className={`title-card border-black border review-2 p-2 p-md-3 rounded bg-red-1 ${
            dataCardActive ? "active z-3" : "z-2"
          }`}
          onClick={() => {
            setIntroCardActive(false);
            setDataCardActive(true);
            setWebCardActive(false);
          }}
        >
          <div className="h4 text-uppercase text-light-yellow ">
            Achieved my dream score
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={FemaleUser} alt="" className="user-img" />
            <div>
              <div className="text-strong">Phuong Nguyen - Hanoi, Vietnam</div>
              <p className="text-charcoal-1">
                I decided to sit the IELTS exam after a year of using LWT, but I
                was not expecting so much success. I got 8.5 in the reading and
                8 in the listening test!
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
        <div
          className={`title-card border-black border review-3 p-2 p-md-3 rounded bg-green-1 ${
            webCardActive ? "active z-3" : ""
          }
            `}
          onClick={() => {
            setIntroCardActive(false);
            setDataCardActive(false);
            setWebCardActive(true);
          }}
        >
          <div className="h4 text-uppercase text-light-yellow ">
            Efficient and effective
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={MaleUser1} alt="" className="user-img" />
            <div>
              <div className="text-strong">Liu - Shenzhen, China</div>
              <p className="text-charcoal-1">
                I really want to thank LWT so much for transforming the way I
                learn languages. The LWT system makes reading English easy,
                efficient and effective. By highlighting words and phrases, your
                vocabulary and grammar knowledge improves naturally as you read.
              </p>
            </div>
          </div>
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
