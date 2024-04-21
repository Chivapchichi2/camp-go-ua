import { ReactComponent as Heart } from '../../../icons/Heart.svg';
import { ReactComponent as HeartFull } from '../../../icons/HeartFull.svg';
import style from './FavoriteButton.module.css';

const FavoriteButton = ({ onClick, isFavorite }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button className={style.FavoriteButton} onClick={handleClick}>
      {isFavorite ? <HeartFull /> : <Heart />}
    </button>
  );
};

export default FavoriteButton;
