import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "hooks";
import { Loader, Error } from "components";
import {
  equitieSelector,
  errorSelector,
  getChart,
  isLoadingSelector,
} from "store/reducers/chart";

import { Chart } from "./Chart";
import { MESSAGES } from "../constant";


export const ChartContainer = () => {
  const equitie = useAppSelector(equitieSelector);
  const isLoading = useAppSelector(isLoadingSelector);
  const error = useAppSelector(errorSelector);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { symbols } = useParams();

  useEffect(() => {
    symbols && dispatch(getChart(symbols));
  }, [dispatch, symbols]);

  const handleGoBackClick = () => navigate(-1);

  if (error) return <Error error={error} />;

  return isLoading ? <Loader /> : equitie.symbol ? <Chart equitie={equitie} handler={handleGoBackClick} /> : <div>{MESSAGES.NO_EQUITIE}</div>;
};

export default ChartContainer;
