import { FC } from "react";

import { ChartComponent } from "components";

import { ChartWrapper, GoBackButtonStyled } from "./styles";
import { IChartProps } from "./types";
import Info from "./Info";

const Chart: FC<IChartProps> = ({ equitie, handleGoBackClick }) => (
  <ChartWrapper>
    <GoBackButtonStyled onClick={handleGoBackClick}>&#10229;</GoBackButtonStyled>
    <h1>{equitie.symbol}</h1>
    <ChartComponent {...equitie} />
    <Info {...equitie} />
  </ChartWrapper>
);

export default Chart;
