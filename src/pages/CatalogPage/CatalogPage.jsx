import { useDispatch, useSelector } from 'react-redux';
import FilterForm from '../../components/FilterForm';
import { changeFilter } from '../../store/filter/filterSlice';
import {
  selectCampers,
  selectIsLoading,
  selectPage,
} from '../../store/selectors';
import { useEffect, useState } from 'react';
import CardList from '../../components/CardList';
import { fetchCampers } from '../../store/campers/operations';
import { setPage } from '../../store/campers/campersSlice';
import styles from './CatalogPage.module.css';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import CamperDetail from '../../components/CamperDetail';

const CatalogPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMoreId, setShowMoreId] = useState(null);
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
  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };
  const handelShowMoreClick = id => {
    setShowMoreId(id);
    toggleModal();
  };

  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal} onClick={toggleModal}>
          <CamperDetail id={showMoreId} />
        </Modal>
      )}
      <div className={styles.Catalog}>
        <h1 className="hidden">Catalog Page</h1>
        <FilterForm onSubmit={handleFilter} />
        {isLoading && <Loader />}
        {!isLoading && (
          <CardList campers={campers} showMoreClick={handelShowMoreClick} />
        )}
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
