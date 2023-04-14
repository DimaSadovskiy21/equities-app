import { FC } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useCombinedRefs as refs } from "ii-react-libraries";

import { Button } from "components";

import { EquitiesItems, EquitiesStyled, EquitiesList } from "./styles";
import { IEquitiesProps } from "./types";
import { Equitie } from "./Equitie";

export const Equities: FC<IEquitiesProps> = ({
  currentEquities,
  isDisabledPrevButtton,
  isDisabledNextButtton,
  onDragEnd,
  handlePrevClick,
  handleNextClick,
  scrollRef,
}) => {
  return (
    <EquitiesStyled>
      <Button
        isDisabled={isDisabledPrevButtton}
        type="❰"
        handler={handlePrevClick}
      />
      <EquitiesList>
        <h3>Equities</h3>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <EquitiesItems
                {...provided.droppableProps}
                ref={refs(provided.innerRef, scrollRef)}
              >
                {currentEquities.map((e, index) => (
                  <Equitie key={e.symbol} index={index} {...e}/>
                ))}
                {provided.placeholder}
              </EquitiesItems>
            )}
          </Droppable>
        </DragDropContext>
      </EquitiesList>
      <Button
        isDisabled={isDisabledNextButtton}
        type="❱"
        handler={handleNextClick}
      />
    </EquitiesStyled>
  );
};
