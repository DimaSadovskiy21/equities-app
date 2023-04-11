import { IEquities } from "components";

export interface IChartProps extends IEquities {
  size: "small" | "large";
}

export interface IChartStyled {
  size: "small" | "large";
}

export interface IChartState {
  equitie: IEquities;
  loading: boolean;
  error: string;
}

