import style from './Reviews.module.css';
import Review from './Review';
const Reviews = ({ data }) => {
  return (
    <ul className={style.reviews}>
      {data.map((review, index) => (
        <Review key={index} {...review} />
      ))}{' '}
    </ul>
  );
};

export default Reviews;
