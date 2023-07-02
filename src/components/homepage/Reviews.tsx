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
            Review 1
          </div>
          <div className="text-strong">Lorem, ipsum dolor</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            accusamus aperiam, iure quos non dicta doloremque assumenda tempora
            cumque voluptatum nobis provident, odio beatae consequuntur illo
            vero. Neque, facilis sequi!
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
            Review 2
          </div>
          <div className="text-strong">Lorem, ipsum dolor</div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At autem
            nisi harum vel dolor ipsum fugiat adipisci, dolore cumque distinctio
            reiciendis odio aliquid assumenda veritatis voluptate consequatur
            aperiam obcaecati rem!
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
            Review 3
          </div>
          <div className="text-strong">Lorem, ipsum dolor</div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At autem
            nisi harum vel dolor ipsum fugiat adipisci, dolore cumque distinctio
            reiciendis odio aliquid assumenda veritatis voluptate consequatur
            aperiam obcaecati rem!
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
