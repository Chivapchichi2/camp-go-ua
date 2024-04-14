import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectError,
  selectFavoriteCampers,
  selectIsLoading,
} from '../store/selectors';
import { fetchCamperById, fetchCampers } from '../store/campers/operations';
import { toggleFavorite } from '../store/campers/campersSlice';

export const App = () => {
  // const error = useSelector(selectError);
  // const isLoading = useSelector(selectIsLoading);
  const campers = useSelector(selectCampers);
  const favorite = useSelector(selectFavoriteCampers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers(1));
  }, [dispatch]);
  console.log(campers);
  console.log(favorite);
  return (
    <>
      <h1>React homework template</h1>
      <button
        onClick={() => {
          dispatch(toggleFavorite(3));
        }}
      >
        Click me
      </button>
      ,
    </>
  );
};
