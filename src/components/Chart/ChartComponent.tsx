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
import { ChartsStyled,  } from "./styles";

ChartJS.register(PointElement, LineElement, CategoryScale, LinearScale);

export const ChartComponent: FC<IChartProps> = ({symbol ,lastSalePrice, lastUpdated, size}) => {
  const labels = useMemo(
    () => getChartCurrentEquitie(lastSalePrice, lastUpdated),
    [lastSalePrice, lastUpdated]
  );

  const styleChartLabels =
    size === "small"
      ? labels.map((label) => label.time).fill("|")
      : labels.map((label) => label.time);

  const data = {
    labels: styleChartLabels,
    datasets: [
      {
        label: symbol,
        data: labels.map((label) => label.price),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <ChartsStyled size={size}>
      <Line data={data} />
    </ChartsStyled>
  );
};

