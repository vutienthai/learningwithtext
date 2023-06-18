import React from "react";
import {
  AwardIcon,
  BalloonIcon,
  BezierIcon,
  BookmarkIcon,
  DoorIcon,
  PlaneIcon,
} from "../utilities/svg";

type Props = { loggedIn: boolean };

const Icons = (props: Props) => {
  return (
    <>
      <div
        id="bookmark-icon"
        className="bg-black p-2 p-md-3 position-absolute top-0 start-0 z-0"
      >
        {props.loggedIn ? (
          <PlaneIcon size={100} />
        ) : (
          <BookmarkIcon size={100} />
        )}
      </div>
      <div
        id="award-icon"
        className="bg-black p-2 p-md-3 position-absolute bottom-0 end-0 z-0"
      >
        {props.loggedIn ? <DoorIcon size={100} /> : <AwardIcon size={100} />}
      </div>
      <div
        id="bezier-icon"
        className="bg-black p-2 p-md-3 position-absolute top-0 end-0 z-0 d-none d-lg-block"
      >
        {props.loggedIn ? (
          <BalloonIcon size={100} />
        ) : (
          <BezierIcon size={100} />
        )}
      </div>
    </>
  );
};

export default Icons;
