import Attribute from '../../general/Attribute';
import styles from './Features.module.css';

const Features = ({ data }) => {
  const featuresArray = Object.entries(data.features);
  const detailsArray = Object.entries(data.details);
  return (
    <div className={styles.featuresContainer}>
      <ul className={styles.featuresList}>
        {featuresArray.map(([key, value]) => (
          <li key={key}>
            <Attribute attribute={key} text={value} />
          </li>
        ))}
      </ul>
      <h2 className={styles.featuresTitle}>Vehicle details</h2>
      <ul className={styles.detailsList}>
        {detailsArray.map(([key, value]) => (
          <li key={key} className={styles.detailsItem}>
            <span>{key}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
