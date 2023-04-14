import { FC } from "react";

import { ChartComponent } from "components";

import { Info } from "./Info";
import { IChartProps } from "./types";
import { ChartsStyled } from "./styles";

export const Chart:FC<IChartProps> = ({equitie, handler}) => {
  return (
    <ChartsStyled>
      <button onClick={handler}>&#10229;</button>
      <h1>{equitie.symbol}</h1>
      <ChartComponent {...equitie}/>
      <Info {...equitie} />
    </ChartsStyled>
  );
};
