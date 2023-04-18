import { getAnalogTime } from "utils";

export const getChartCurrentEquitie = (
  lastSalePrice: number,
  lastUpdated: number,
  steps: number = 10,
  stepSize: number = 0.1,
  timeStep: number = 600000
) => {
  const data = [];

  let startTime = lastUpdated;
  
  for (let i = 0; i < steps; i++) {
    let price = lastSalePrice + (Math.random() < 0.5 ? -1 : 1) * Math.random() * stepSize;
    startTime += timeStep;
    data.push({
      time: getAnalogTime(startTime),
      price: price.toFixed(4),
    });
  }

  return data;
};
