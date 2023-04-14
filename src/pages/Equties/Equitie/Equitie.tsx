import { FC } from "react";
import { Link } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";

import { useAppSelector } from "hooks";
import { ChartComponent } from "components/Chart";
import { currentPageSelector } from "store/reducers/equities";

import { IEquitieProps } from "./types";
import { createOrdinalNumber } from "./utils";
import {
  EquitieChart,
  EquitieOrdinalNumber,
  EquitiePrice,
  EquitieStyled,
  EquitieSymbol,
} from "./styles";

export const Equitie: FC<IEquitieProps> = ({
  symbol,
  lastSalePrice,
  lastUpdated,
  index,
  ...restProps
}) => {
  const currentPage = useAppSelector(currentPageSelector);

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
              {createOrdinalNumber(index, currentPage)}.
            </EquitieOrdinalNumber>
            <EquitieSymbol>{symbol}</EquitieSymbol>
            <EquitiePrice>{lastSalePrice} $</EquitiePrice>
            <EquitieChart>
              <ChartComponent
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
