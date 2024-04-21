import React, { forwardRef } from 'react';
import { ReactComponent as MapPin } from '../../../icons/MapPin.svg';
import styles from './Input.module.css';

const Input = forwardRef(({ label, ...props }, ref) => {
  return (
    <label className={styles.inputWrapper}>
      {label}
      <MapPin className={styles.icon} />
      <input ref={ref} className={styles.inputField} {...props} />
    </label>
  );
});

export default Input;
