import { FC } from "react";

import { ChartComponent } from "components";

import { ChartWrapper, GoBackButtonStyled } from "./styles";
import { IChartProps } from "./types";
import Info from "./Info";

const Chart: FC<IChartProps> = ({ equitie, handleGoBackClick }) => {
  const { symbol, lastSalePrice, lastUpdated } = equitie;

  return (
    <ChartWrapper>
      <GoBackButtonStyled onClick={handleGoBackClick}>
        &#10229;
      </GoBackButtonStyled>
      <h1>{symbol}</h1>
      <ChartComponent
        symbol={symbol}
        lastSalePrice={lastSalePrice}
        lastUpdated={lastUpdated}
      />
      <Info equitie={equitie} />
    </ChartWrapper>
  );
};

export default Chart;
