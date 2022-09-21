import PropTypes from 'prop-types';

import styles from './Counter.module.css';

const STEP = 2;

const Counter = ({ cardsCount, onClick }) => {
  const handleDecrement = (e) => {
    e.preventDefault();
    const number = cardsCount - STEP;
    if (number >= 2) {
      onClick(number);
    }
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    const number = cardsCount + STEP;
    if (number <= 20) {
      onClick(number);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.minus} onClick={handleDecrement}>
        -
      </button>
      <span className={styles.quantity}>{cardsCount}</span>
      <button className={styles.plus} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  cardsCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
