import { ReactComponent as Arrow } from '../../../../icons/Arrow.svg';
import { ReactComponent as Calendar } from '../../../../icons/Calendar.svg';

import ReactDatePicker from 'react-datepicker';
import Input from '../Input';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.css';
import '../../../../css/datePicker.css';

const DatePicker = ({ ...props }) => {
  const makeCustomHeader = ({ date, decreaseMonth, increaseMonth }) => {
    return (
      <div className={styles.header}>
        <button className={styles.button} type="button" onClick={decreaseMonth}>
          <Arrow />
        </button>
        <p className={styles.dateContainer}>
          {date.toLocaleString('en-GB', {
            month: 'long',
            year: 'numeric',
          })}
        </p>
        <button className={styles.button} type="button" onClick={increaseMonth}>
          <Arrow className={styles.rotate} />
        </button>
      </div>
    );
  };

  return (
    <ReactDatePicker
      {...props}
      className={styles.datePicker}
      placeholderText="Booking date"
      renderCustomHeader={makeCustomHeader}
      formatWeekDay={nameOfDay => nameOfDay.substr(0, 3)}
      minDate={new Date()}
      customInput={<Input type="text" icon={Calendar} />}
      onKeyDown={e => {
        e.preventDefault();
      }}
      dateFormat="dd/MM/yyyy"
    />
  );
};

export default DatePicker;
