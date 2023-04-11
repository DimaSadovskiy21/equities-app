import axios from "axios";

import { IEquities } from "components";

const instance = axios.create({
  baseURL: "https://cloud.iexapis.com/",
});

export const iexAPI = {
  getEquities() {
    return instance.get<IEquities[]>(
      `stable/tops?token=${process.env.REACT_APP_USER_TOKEN}`
    );
  },
  getChart(symbols: string) {
    return instance.get<IEquities[]>(
      `stable/tops?token=${process.env.REACT_APP_USER_TOKEN}&symbols=${symbols}`
    );
  },
};
