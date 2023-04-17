import { FC } from "react";
import { Link } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";

import ChartComponent from "components/Chart";

import {
  EquitieChart,
  EquitieOrdinalNumber,
  EquitiePrice,
  EquitieWrapper,
  EquitieSymbol,
} from "./styles";
import { IEquitieProps } from "./types";
import { createOrdinalNumber } from "./utils";

const Equitie: FC<IEquitieProps> = ({
  symbol,
  lastSalePrice,
  lastUpdated,
  index,
  currentPage,
  ...restProps
}) => (
  <Draggable key={symbol} draggableId={symbol} index={index}>
    {(provided) => (
      <Link
        ref={provided.innerRef}
        to={`chart/${symbol}`}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <EquitieWrapper>
          <EquitieOrdinalNumber>
            {createOrdinalNumber(index, currentPage)}.
          </EquitieOrdinalNumber>
          <EquitieSymbol>{symbol}</EquitieSymbol>
          <EquitiePrice>{lastSalePrice} $</EquitiePrice>
          <EquitieChart>
            <ChartComponent
              size="small"
              symbol={symbol}
              lastSalePrice={lastSalePrice}
              lastUpdated={lastUpdated}
              {...restProps}
            />
          </EquitieChart>
        </EquitieWrapper>
      </Link>
    )}
  </Draggable>
);

export default Equitie;