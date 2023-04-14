import axios from "axios";

import { IEquitie } from "types";

const instance = axios.create({
  baseURL: "https://cloud.iexapis.com/",
});

export const iexAPI = {
  getEquities: () =>
    instance.get<IEquitie[]>(
      `stable/tops?token=${process.env.REACT_APP_USER_TOKEN}`
    ),
  getChart: (symbols: string) =>
    instance.get<IEquitie[]>(
      `stable/tops?token=${process.env.REACT_APP_USER_TOKEN}&symbols=${symbols}`
    ),
};
