import { ReactComponent as Heart } from '../../../icons/Heart.svg';
import { ReactComponent as HeartFull } from '../../../icons/HeartFull.svg';
import style from './FavoriteButton.module.css';
import { useState } from 'react';

const FavoriteButton = ({ onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite(prev => !prev);
    onClick();
  };
  return (
    <button className={style.FavoriteButton} onClick={handleClick}>
      {isFavorite ? <HeartFull /> : <Heart />}
    </button>
  );
};

export default FavoriteButton;
