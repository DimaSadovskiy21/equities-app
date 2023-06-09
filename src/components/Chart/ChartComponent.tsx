import { FC, useMemo } from "react";
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { ChartWrapper } from "./styles";
import { IChartProps } from "./types";
import { getChartCurrentEquitie } from "./utils";

ChartJS.register(PointElement, LineElement, CategoryScale, LinearScale);

const ChartComponent: FC<IChartProps> = ({
  size,
  symbol,
  lastSalePrice,
  lastUpdated,
}) => {
  const labels = useMemo(
    () => getChartCurrentEquitie(lastSalePrice, lastUpdated),
    [lastSalePrice, lastUpdated]
  );

  const data = useMemo(() => {
    const sticks = new Array(labels.length).fill("|");
    const time = labels.map((label) => label.time);

    const styleChartLabels = size === "small" ? sticks : time;

    const prices = labels.map((label) => label.price);

    return {
      labels: styleChartLabels,
      datasets: [
        {
          label: symbol,
          data: prices,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
  }, [labels, size, symbol]);

  return (
    <ChartWrapper size={size}>
      <Line data={data} />
    </ChartWrapper>
  );
};

export default ChartComponent;
