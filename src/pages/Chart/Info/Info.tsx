import { FC } from "react";

import { InfoList, InfoItem, InfoWrapper, InfoTitle } from "./styles";
import { TInfoProps } from "./types";
import { generateEquitieData } from "./utils";

const Info: FC<TInfoProps> = ({ equitie }) => {
  const data = generateEquitieData(equitie);

  return (
    <InfoWrapper>
      <InfoTitle>Equitie info</InfoTitle>
      <InfoList>
        {data.map(({ key, value }, index) => (
          <InfoItem key={index}>
            <span>{key}:</span>
            <span>{value}</span>
          </InfoItem>
        ))}
      </InfoList>
    </InfoWrapper>
  );
};

export default Info;
