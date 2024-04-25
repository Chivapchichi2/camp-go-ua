import Avatar from '../Avatar';
import Rating from '../Rating';
import styles from './Review.module.css';

const Review = ({ reviewer_name: name, reviewer_rating: rating, comment }) => {
  return (
    <li className={styles.review}>
      <div className={styles.header}>
        <Avatar name={name} />
        <div className={styles.container}>
          <p className={styles.name}>{name}</p>
          <Rating rating={rating} />
        </div>
      </div>
      <p className={styles.comment}>{comment}</p>
    </li>
  );
};

export default Review;
