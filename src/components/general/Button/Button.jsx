import styles from './Button.module.css';

const Button = ({ text, type, onClick = () => {} }) => {
  return (
    <button type={type} className={styles.Button} onClick={() => onClick()}>
      {text}
    </button>
  );
};
export default Button;
