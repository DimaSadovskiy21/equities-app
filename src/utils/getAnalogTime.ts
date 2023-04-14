const getCorrectTime = (time: number) => {
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