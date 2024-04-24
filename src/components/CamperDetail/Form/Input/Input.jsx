import React, { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(({ label, icon: Icon, ...props }, ref) => {
  return (
    <label className={styles.inputWrapper}>
      {label}
      {Icon && <Icon className={styles.icon} />}
      <input ref={ref} className={styles.inputField} {...props} />
    </label>
  );
});

export default Input;
