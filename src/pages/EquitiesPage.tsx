import { useEffect } from "react";

import { Equities, Error, getEquities, Loader, setCurrentEquities } from "components";
import { useAppDispatch, useAppSelector } from "hooks";

export const EquitiesPage = () => {
  const { equities, loading, error, from, to } = useAppSelector(
    (state) => state.equitiesReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEquities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentEquities({ from, to }));
  }, [dispatch, equities, from, to]);

  if (error) return <Error err={error} />;
 
  return loading ? <Loader /> : equities.length ? <Equities /> : <Error err={error} />;
};

