import { ReactComponent as Star } from '../../icons/Star.svg';
import { ReactComponent as MapPin } from '../../icons/MapPin.svg';
import { ReactComponent as Cross } from '../../icons/Cross.svg';

import { useSelector } from 'react-redux';
import { selectCamperById } from '../../store/selectors';
import styles from './CamperDetail.module.css';
import { formatRating, formatter } from '../../misc/utils';

const CamperDetail = ({ id, onClick }) => {
  const camperData = useSelector(selectCamperById(id));
  console.log(camperData);

  const toggleActive = e => {
    const children = Array.from(e.currentTarget.parentNode.children);
    children.forEach(child => {
      if (child !== e.currentTarget) {
        child.classList.remove(styles.active);
      }
    });
    e.currentTarget.classList.toggle(styles.active);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{camperData?.name}</h2>
        <button type="button" onClick={onClick}>
          <Cross className={styles.cross} />
        </button>
      </div>
      <div className={styles.infoContainer}>
        <Star />
        <span className={styles.rating}>{formatRating(camperData)}</span>
        <MapPin />
        <span>{camperData?.location}</span>
      </div>
      <p className={styles.price}>{formatter.format(camperData?.price)}</p>
      <div className={styles.scrollingArea}>
        <div className={styles.imageContainer}>
          {camperData?.gallery.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={camperData?.name}
              className={styles.image}
            ></img>
          ))}
        </div>
        <p>{camperData?.description}</p>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={toggleActive}>
          Features
        </button>
        <button className={styles.button} onClick={toggleActive}>
          Reviews
        </button>
      </div>
    </div>
  );
};
export default CamperDetail;
