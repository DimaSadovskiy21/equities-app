import { IEquitie } from "types";
import { getAnalogTime } from "utils";

export const getCorrectKey = (key: string) =>
  key.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();

export const generateEquitieData = (equitie: IEquitie) =>
  Object.entries(equitie).map(([key, value]) => {
    let updatedValue = value;

    if (key === "lastUpdated" || key === "lastSaleTime") {
      updatedValue = getAnalogTime(value);
    }

    if (key.includes("Price")) {
      updatedValue += "$";
    }
    return { key: getCorrectKey(key), value: updatedValue };
  });
