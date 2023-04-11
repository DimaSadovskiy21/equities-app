export const getCorrectTime = (time: number) => {
  return time < 10 ? "0" + time : time;
};

export const getAnalogTime = (time: number) => {
  const hours = new Date(time).getHours();
  const minutes = new Date(time).getMinutes();
  const seconds = new Date(time).getSeconds();

  const analogTime = `${getCorrectTime(hours)}:${getCorrectTime(
    minutes
  )}:${getCorrectTime(seconds)}`;

  return analogTime;
};

export const getChartCurrentEquitie = (
  lastSalePrice: number,
  lastUpdated: number,
  steps: number = 10,
  stepSize: number = 0.001,
  timeStep: number = 600000
) => {
  const data = [];

  let startTime = lastUpdated;
  for (let i = 0; i < steps; i++) {
    let price =
      lastSalePrice + (Math.random() < 0.5 ? -1 : 1) * Math.random() * stepSize;
    startTime += timeStep;
    data.push({
      time: getAnalogTime(startTime),
      price: price.toFixed(4),
    });
  }

  return data;
};
