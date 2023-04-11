import { FC } from "react";

import { getAnalogTime } from "components/Chart";

import { InfoItems, InfoItem, InfoStyled, InfoTitle } from "./styles";
import { TInfo } from "./types";
import { getCorrectKey } from "./utils";


export const Info: FC<TInfo> = (props) => {

  return (
    <InfoStyled>
          <InfoTitle>Equitie info</InfoTitle>
      <InfoItems>
        {Object.entries(props).map((el) => {
          const checkIsCorrectKey = el[0] !== "size" && el[1] !== "small" && el[1] !== "large";

          if(el[0].includes('Updated') || el[0].includes('Time')) {
            el[1] = getAnalogTime(el[1]);
          }

          if(el[0].includes('Price')) {
            el[1] += '$';
          }

          if (checkIsCorrectKey) {
            return (
              <InfoItem key={props.symbol}>
                <span>{getCorrectKey(el[0])}:</span>
                <span>{el[1]}</span>
              </InfoItem>
            );
          }
        })}
      </InfoItems>
    </InfoStyled>
  );
};
