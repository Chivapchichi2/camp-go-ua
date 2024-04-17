import { ReactComponent as Star } from '../../icons/Star.svg';
import { ReactComponent as MapPin } from '../../icons/MapPin.svg';

import styles from './Card.module.css';
import Attribute from '../general/Attribute';
import Button from '../general/Button';
import FavoriteButton from '../general/FavoriteButton';

const Card = ({
  attributes,
  description,
  image,
  location,
  name,
  price,
  rating,
}) => {
  const favorite = true;
  const attributesArray = Object.entries(attributes);
  return (
    <div className={styles.Card}>
      <div className={styles.containerImage}>
        <img className={styles.cardImage} src={image} alt={name} />
      </div>
      <div className={styles.infoBox}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{name}</h2>
          <div>
            <span className={styles.price}>{price}</span>
            <FavoriteButton onClick={() => console.log('clicked')} />
          </div>
        </div>
        <div className={styles.infoContainer}>
          <Star />
          <span className={styles.rating}>{rating}</span>
          <MapPin />
          <span>{location}</span>
        </div>
        <p className={styles.description}>{description}</p>
        <ul className={styles.attributes}>
          {attributesArray.map(([key, value]) => (
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
