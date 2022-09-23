import PropTypes from 'prop-types';

import styles from './StartScreen.module.css';

const StartScreen = ({ onClick }) => {
  return (
    <div className={styles.wrapper}>
      <h1>Memory Game</h1>
      <button className={styles.button} onClick={onClick}>
        Play
      </button>
    </div>
  );
};

export default StartScreen;

StartScreen.propTypes = {
  onClick: PropTypes.func.isRequired,
};
