import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { FC } from "react";

interface ISortComponent {
  onClickUp: () => void;
  onClickDown: () => void;
}

const SortComponent: FC<ISortComponent> = ({ onClickDown, onClickUp }) => {
  return (
    <div className="d-flex gap-2 mx-2">
      <span onClick={onClickUp} role="button">
        <FaChevronUp />
      </span>
      <span onClick={onClickDown} role="button">
        <FaChevronDown />
      </span>
    </div>
  );
};

export default SortComponent;
