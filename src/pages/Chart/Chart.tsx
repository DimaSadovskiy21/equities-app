import { FC } from 'react';

import { ChartComponent } from 'components';

import { Info } from './Info';
import { IChartProps } from './types';
import { ChartWrapper } from './styles';

export const Chart: FC<IChartProps> = ({ equitie, handler }) => (
  <ChartWrapper>
    <button onClick={handler}>&#10229;</button>
    <h1>{equitie.symbol}</h1>
    <ChartComponent {...equitie} />
    <Info {...equitie} />
  </ChartWrapper>
);
