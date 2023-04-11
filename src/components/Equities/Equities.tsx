import { useRef } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { useCombinedRefs as refs} from 'ii-react-libraries';

import { useAppDispatch, useAppSelector } from 'hooks';
import { Button, Equitie } from './components';
import { setNextPage, setPrevPage, setDraggingEquities } from './slice';
import { EquitiesItems, EquitiesStyled, EquitiesList } from './styles';


export const Equities = () => {
  const { equities, currentEquities, from, to } = useAppSelector((state) => state.equitiesReducer);
  const dispatch = useAppDispatch();

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    const items = Array.from(currentEquities);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);

    dispatch(setDraggingEquities(items));
  };

  const handlePrevClick = () => {
    dispatch(setPrevPage({ from, to }));
    scrollRef?.current?.scrollTo(0, 0)
  };

  const handleNextClick = () => {
    dispatch(setNextPage({ from, to }));
    scrollRef?.current?.scrollTo(0, 0);
  };

  const isDisabledPrevButtton = from <= 1;
  const isDisabledNextButtton = to === equities.length + 1;
  
  return (
    <EquitiesStyled>
      <Button isDisabled={isDisabledPrevButtton} type="❰" handler={handlePrevClick} />
      <EquitiesList>
        <h3>Equities</h3>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <EquitiesItems {...provided.droppableProps} ref={refs(provided.innerRef, scrollRef)}>
                {currentEquities.map((e, index) => (
                  <Equitie key={e.symbol} {...e} index={index} />
                ))}
                {provided.placeholder}
              </EquitiesItems>
            )}
          </Droppable>
        </DragDropContext>
      </EquitiesList>
      <Button isDisabled={isDisabledNextButtton} type="❱" handler={handleNextClick} />
    </EquitiesStyled>
  );
};
