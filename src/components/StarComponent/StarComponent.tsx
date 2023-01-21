import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { FC } from "react";

interface IStarComponent {
  onClick: () => void;
  isBest?: boolean;
}

const StarComponent: FC<IStarComponent> = ({ onClick, isBest }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-warning fs-1 text"
      onClick={onClick}
      role="button"
    >
      {isBest ? <AiFillStar /> : <AiOutlineStar />}
    </div>
  );
};

export default StarComponent;
