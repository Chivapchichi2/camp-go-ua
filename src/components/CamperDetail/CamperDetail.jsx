import { ReactComponent as Star } from '../../icons/Star.svg';
import { ReactComponent as MapPin } from '../../icons/MapPin.svg';

import { useSelector } from 'react-redux';
import { selectCamperById } from '../../store/selectors';
import styles from './CamperDetail.module.css';
import { formatRating, formatter } from '../../misc/utils';

const CamperDetail = ({ id }) => {
  const camperData = useSelector(selectCamperById(id));
  console.log(camperData);
  return (
    <div className={styles.modalWrap}>
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>{camperData?.name}</h2>
        {/*<IconButton type="button" onClick={closeModal}>*/}
        {/*  <Cross />*/}
        {/*</IconButton>*/}
      </div>
      <div className={styles.ratingLocatedWrap}>
        <Star />
        <span className={styles.rating}>{formatRating(camperData)}</span>
        <MapPin />
        <span>{camperData?.location}</span>
      </div>
      <p className={styles.price}>{formatter.format(camperData?.price)}</p>
      <div className={styles.scrollWrap}>
        <div className={styles.imageWrap}>
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
    </div>
  );
};
export default CamperDetail;
