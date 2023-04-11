import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Chart, getChart, Loader, Error } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';

export const ChartPage = () => {
  const { equitie, loading, error } = useAppSelector((state) => state.chartReducer);

  const dispatch = useAppDispatch();

  const { symbols } = useParams();

  useEffect(() => {
    symbols && dispatch(getChart(symbols));
  }, [dispatch, symbols]);

  if (error) return <Error err={error} />;

  return loading ? <Loader /> : equitie.symbol ? <Chart {...equitie} size="large" /> : <Error err={error} />;
};
