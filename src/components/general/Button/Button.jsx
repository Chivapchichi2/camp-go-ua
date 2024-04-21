import styles from './Button.module.css';

const Button = ({ text, type }) => {
  return (
    <button type={type} className={styles.Button}>
      {text}
    </button>
  );
};
export default Button;
