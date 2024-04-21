import styles from './CardList.module.css';
import { parseDataForCatalog } from '../../misc/utils';
import Card from '../Card';

const CardList = ({ campers }) => {
  return (
    <>
      <ul className={styles.cardList}>
        {campers.map(data => (
          <Card key={data._id} {...parseDataForCatalog(data)} />
        ))}
      </ul>
    </>
  );
};

export default CardList;
