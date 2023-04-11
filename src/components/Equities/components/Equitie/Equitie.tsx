import { FC } from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "hooks";
import { Chart } from "components";

import { IEquitieProps } from "./types";
import { getOrdinalNumber } from "./utils";
import {
  EquitieChart,
  EquitieOrdinalNumber,
  EquitiePrice,
  EquitieStyled,
  EquitieSymbol,
} from "./styles";
import { Draggable } from "react-beautiful-dnd";

export const Equitie: FC<IEquitieProps> = ({
  symbol,
  lastSalePrice,
  lastUpdated,
  index,
  ...restProps
}) => {
  const { currentPage } = useAppSelector((state) => state.equitiesReducer);

  return (
    <Draggable key={symbol} draggableId={symbol} index={index}>
    {(provided) => (
        <Link
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
          to={`chart/${symbol}`}
        >
          <EquitieStyled>
            <EquitieOrdinalNumber>
              {getOrdinalNumber(index, currentPage)}.
            </EquitieOrdinalNumber>
            <EquitieSymbol>{symbol}</EquitieSymbol>
            <EquitiePrice>{lastSalePrice} $</EquitiePrice>
            <EquitieChart>
              <Chart
                symbol={symbol}
                lastSalePrice={lastSalePrice}
                lastUpdated={lastUpdated}
                size="small"
                {...restProps}
              />
            </EquitieChart>
          </EquitieStyled>
        </Link>
   )}
   </Draggable>
  );
};
