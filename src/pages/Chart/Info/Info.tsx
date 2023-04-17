import { FC } from "react";

import { getAnalogTime } from "utils";

import { InfoList, InfoItem, InfoWrapper, InfoTitle } from "./styles";
import { TInfo } from "./types";
import { getCorrectKey } from "./utils";

const Info: FC<TInfo> = (props) => (
  <InfoWrapper>
    <InfoTitle>Equitie info</InfoTitle>
    <InfoList>
      {Object.entries(props).map(([key, value], index) => {
        if (key.includes("Updated") || key.includes("Time")) {
          value = getAnalogTime(value);
        }

        if (key.includes("Price")) {
          value += "$";
        }

        const checkIsCorrectKey =
          key !== "size" && value !== "small" && value !== "large";

        if (checkIsCorrectKey) {
          return (
            <InfoItem key={index}>
              <span>{getCorrectKey(key)}:</span>
              <span>{value}</span>
            </InfoItem>
          );
        }
      })}
    </InfoList>
  </InfoWrapper>
);

export default Info;
