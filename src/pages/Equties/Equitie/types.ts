import { IEquitie } from "types";

export interface IEquitieContainerProps extends IEquitie {
  index: number;
}

export interface IEquitieProps extends IEquitieContainerProps {
  currentPage: number;
}
