import { FC, useMemo } from "react";
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { getChartCurrentEquitie } from "./utils";
import { IChartProps } from "./types";
import { ChartsStyled, GoBackButton } from "./styles";
import { Info } from "./components";
import { useNavigate } from "react-router-dom";


ChartJS.register(PointElement, LineElement, CategoryScale, LinearScale);

export const Chart: FC<IChartProps> = (props) => {

  const navigate = useNavigate();

  const { lastSalePrice, lastUpdated, size, symbol } = props;

  const labels = useMemo(() => getChartCurrentEquitie(lastSalePrice, lastUpdated), [lastSalePrice, lastUpdated]);

  const handleGoBackClick = () => navigate(-1);

  const styleChartLabels =
    size === "small"
      ? labels.map((el) => el.time).fill("|")
      : labels.map((el) => el.time);

  const data = {
    labels: styleChartLabels,
    datasets: [
      {
        label: symbol,
        data: labels.map((el) => el.price),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <ChartsStyled size={size}>
      {size === "large" && <GoBackButton onClick={handleGoBackClick}>&#10229;</GoBackButton>}
      {size === "large" && <h1>{symbol}</h1>}
       <Line data={data} />
      {size === "large" && (
        <Info {...props}/>
      )}
    </ChartsStyled>
  );
};
