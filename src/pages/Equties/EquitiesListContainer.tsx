import { useEffect, useRef } from "react";
import { DropResult } from "react-beautiful-dnd";

import { useAppDispatch, useAppSelector } from "hooks";
import { Error, Loader } from "components";
import {
  currentEquitiesSelector,
  equitiesSelector,
  errorSelector,
  fromSelector,
  getEquities,
  isLoadingSelector,
  setCurrentEquities,
  setDraggingEquities,
  setNextPage,
  setPrevPage,
  toSelector,
} from "store/reducers/equities";

import EquitiesList from "./EquitiesList";
import { Message } from "../styles";
import { MESSAGES } from "../constant";


const EquitiesListContainer = () => {
  const equities = useAppSelector(equitiesSelector);
  const currentEquities = useAppSelector(currentEquitiesSelector);
  const isLoading = useAppSelector(isLoadingSelector);
  const error = useAppSelector(errorSelector);
  const from = useAppSelector(fromSelector);
  const to = useAppSelector(toSelector);

  const dispatch = useAppDispatch();

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(getEquities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentEquities({ from, to }));
  }, [dispatch, equities, from, to]);

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
    scrollRef?.current?.scrollTo(0, 0);
  };

  const handleNextClick = () => {
    dispatch(setNextPage({ from, to }));
    scrollRef?.current?.scrollTo(0, 0);
  };

  const isDisabledPrevButtton = from <= 1;
  const isDisabledNextButtton = to === equities.length + 1;

  if (error) return <Error error={error} />;

  return isLoading ? (
    <Loader />
  ) : equities.length ? (
    <EquitiesList
      scrollRef={scrollRef}
      currentEquities={currentEquities}
      isDisabledPrevButtton={isDisabledPrevButtton}
      isDisabledNextButtton={isDisabledNextButtton}
      onDragEnd={onDragEnd}
      handlePrevClick={handlePrevClick}
      handleNextClick={handleNextClick}
    />
  ) : (
    <Message>{MESSAGES.NO_EQUITIES}</Message>
  );
};

export default EquitiesListContainer;
