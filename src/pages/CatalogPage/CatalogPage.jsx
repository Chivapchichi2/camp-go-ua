import { useDispatch, useSelector } from 'react-redux';
import FilterForm from '../../components/FilterForm';
import { changeFilter } from '../../store/filter/filterSlice';
import {
  selectCampers,
  selectIsLoading,
  selectPage,
} from '../../store/selectors';
import { useEffect } from 'react';
import CardList from '../../components/CardList';
import { fetchCampers } from '../../store/campers/operations';
import { setPage } from '../../store/campers/campersSlice';
import styles from './CatalogPage.module.css';
import Loader from '../../components/Loader';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { campers, isShowBtn } = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleFilter = data => {
    dispatch(setPage(1));
    dispatch(changeFilter(data));
  };
  const handleClick = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <>
      <div className={styles.Catalog}>
        <h1 className="hidden">Catalog Page</h1>
        <FilterForm onSubmit={handleFilter} />
        {isLoading && <Loader />}
        {!isLoading && <CardList campers={campers} />}
      </div>
      {isShowBtn && !isLoading && (
        <button className={styles.button} onClick={handleClick}>
          Load more
        </button>
      )}
    </>
  );
};

export default CatalogPage;
