import { ReactComponent as Star } from '../../icons/Star.svg';
import { ReactComponent as Heart } from '../../icons/Heart.svg';
import { ReactComponent as HeartFull } from '../../icons/HeartFull.svg';
import { ReactComponent as MapPin } from '../../icons/MapPin.svg';

import styles from './Card.module.css';
import Attribute from '../general/Attribute';
import Button from '../general/Button';

const Card = props => {
  const favorite = true;
  const data = {
    transmission: 'automatic',
    adults: 2,
    engine: 'petrol',
    kitchen: 1,
    beds: 1,
    airConditioner: 1,
  };
  const dataArray = Object.entries(data);
  return (
    <div className={styles.Card}>
      <div className={styles.containerImage}>
        <img
          className={styles.cardImage}
          src="https://ftp.goit.study/img/campers-test-task/8-1.webp"
          alt="Van for rent"
        />
      </div>
      <div className={styles.infoBox}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Mavericks</h2>
          <div>
            <span className={styles.price}>€8000.00</span>
            <button>{favorite ? <HeartFull /> : <Heart />}</button>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <Star />
          <span className={styles.rating}>4.4 (2 reviews)</span>
          <MapPin />
          <span className="camp-card__location">Kyiv, Ukraine</span>
        </div>
        <p className={styles.description}>
          Embrace simplicity and freedom with the Mavericks panel truck, an...
        </p>
        <ul className={styles.attributes}>
          {dataArray.map(([key, value]) => (
            <li key={key}>
              <Attribute attribute={key} text={value} />
            </li>
          ))}
        </ul>
        <Button text={'Show more'} />
      </div>
    </div>
  );
};

export default Card;
