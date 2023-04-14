import { IEquitie } from "types";

export interface IFetchError {
  message: string;
}

export interface ICurrentPage {
  from: number;
  to: number;
}

export interface IEquitiesState extends ICurrentPage {
  equities: IEquitie[];
  currentEquities: IEquitie[];
  isLoading: boolean;
  error: string;
  currentPage: number;
}

export interface IChartState {
  equitie: IEquitie;
  isLoading: boolean;
  error: string;
}

export type TActions = IEquitiesState | IChartState;
