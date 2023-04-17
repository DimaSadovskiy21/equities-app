import { FC } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useCombinedRefs as refs } from "ii-react-libraries";

import { Button } from "components";

import { ItemsList, EquitiesBlock, EquitiesWrapper, ArrowStyled } from "./styles";
import { IEquitiesProps } from "./types";
import Equitie from "./Equitie";

const EquitiesList: FC<IEquitiesProps> = ({
  currentEquities,
  isDisabledPrevButtton,
  isDisabledNextButtton,
  onDragEnd,
  handlePrevClick,
  handleNextClick,
  scrollRef,
}) => (
  <EquitiesWrapper>
    <ArrowStyled disabled={isDisabledPrevButtton} onClick={handlePrevClick}>
      ❰
    </ArrowStyled>
    <EquitiesBlock>
      <h3>Equities</h3>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ItemsList
              {...provided.droppableProps}
              ref={refs(provided.innerRef, scrollRef)}
            >
              {currentEquities.map((equitie, index) => (
                <Equitie key={equitie.symbol} index={index} {...equitie} />
              ))}
              {provided.placeholder}
            </ItemsList>
          )}
        </Droppable>
      </DragDropContext>
    </EquitiesBlock>
    <ArrowStyled disabled={isDisabledNextButtton} onClick={handleNextClick}>
    ❱
    </ArrowStyled>
  </EquitiesWrapper>
);

export default EquitiesList;
