import { ReactComponent as Star } from '../../../../icons/Star.svg';
import { ReactComponent as StarEmpty } from '../../../../icons/StarEmpty.svg';
import styles from './Rating.module.css';

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    return i < Math.floor(rating) ? <Star key={i} /> : <StarEmpty key={i} />;
  });
  return <div className={styles.Container}>{stars}</div>;
};

export default Rating;
