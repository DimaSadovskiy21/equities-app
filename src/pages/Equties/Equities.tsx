import { FC } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useCombinedRefs as refs } from 'ii-react-libraries';

import { Button } from 'components';

import { EquitiesList, EquitiesContainer, EquitiesWrapper } from './styles';
import { IEquitiesProps } from './types';
import { Equitie } from './Equitie';

export const Equities: FC<IEquitiesProps> = ({
  currentEquities,
  isDisabledPrevButtton,
  isDisabledNextButtton,
  onDragEnd,
  handlePrevClick,
  handleNextClick,
  scrollRef,
}) => (
  <EquitiesContainer>
    <Button isDisabled={isDisabledPrevButtton} type="❰" handler={handlePrevClick} />
    <EquitiesWrapper>
      <h3>Equities</h3>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <EquitiesList {...provided.droppableProps} ref={refs(provided.innerRef, scrollRef)}>
              {currentEquities.map((equitie, index) => (
                <Equitie key={equitie.symbol} index={index} {...equitie} />
              ))}
              {provided.placeholder}
            </EquitiesList>
          )}
        </Droppable>
      </DragDropContext>
    </EquitiesWrapper>
    <Button isDisabled={isDisabledNextButtton} type="❱" handler={handleNextClick} />
  </EquitiesContainer>
);
