import { FC } from 'react';

import { getAnalogTime } from 'utils';

import { InfoItems, InfoItem, InfoStyled, InfoTitle } from './styles';
import { TInfo } from './types';
import { getCorrectKey } from './utils';

export const Info: FC<TInfo> = (props) => (
  <InfoStyled>
    <InfoTitle>Equitie info</InfoTitle>
    <InfoItems>
      {Object.entries(props).map((value, index) => {
        const checkIsCorrectKey = value[0] !== 'size' && value[1] !== 'small' && value[1] !== 'large';

        if (value[0].includes('Updated') || value[0].includes('Time')) {
          value[1] = getAnalogTime(value[1]);
        }

        if (value[0].includes('Price')) {
          value[1] += '$';
        }

        if (checkIsCorrectKey) {
          return (
            <InfoItem key={`${props.symbol}:${index}`}>
              <span>{getCorrectKey(value[0])}:</span>
              <span>{value[1]}</span>
            </InfoItem>
          );
        }
      })}
    </InfoItems>
  </InfoStyled>
);
