import CardList from '../../components/CardList';
import Modal from '../../components/Modal';
import CamperDetail from '../../components/CamperDetail';
import Loader from '../../components/Loader';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites, selectIsLoading } from '../../store/selectors';
import styles from './FavoritesPage.module.css';
import Notification from '../../components/general/Notification';

const FavoritesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMoreId, setShowMoreId] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const campers = useSelector(selectFavorites);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const handelShowMoreClick = id => {
    setShowMoreId(id);
    toggleModal();
  };
  return (
    <div className={styles.wrapper}>
      <h1 className="hidden">Favorites Page</h1>
      {showModal && (
        <Modal onClose={toggleModal} onClick={toggleModal}>
          <CamperDetail id={showMoreId} onClick={toggleModal} />
        </Modal>
      )}
      {isLoading && <Loader />}
      {!isLoading && campers.length > 0 ? (
        <CardList campers={campers} showMoreClick={handelShowMoreClick} />
      ) : (
        <Notification message="No favorites yet" />
      )}
    </div>
  );
};

export default FavoritesPage;
