import { IEquitie } from "types/equitie";

export interface IChartProps
  extends Pick<IEquitie, "symbol" | "lastSalePrice" | "lastUpdated"> {
  size?: "small";
}

export interface IChartStyled {
  size?: "small";
}
