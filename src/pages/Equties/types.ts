import { Ref } from "react";
import { DropResult } from "react-beautiful-dnd";

import { IEquitie } from "types";

export interface IEquitiesProps {
  currentEquities: IEquitie[];
  isDisabledPrevButtton: boolean;
  isDisabledNextButtton: boolean;
  onDragEnd: (result: DropResult) => void;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  scrollRef: Ref<HTMLElement>;
}
