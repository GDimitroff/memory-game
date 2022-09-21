import PropTypes from 'prop-types';

import Button from '../UI/Button';
import styles from './Result.module.css';

const Result = ({ restartGame }) => {
  return (
    <div className={styles.container}>
      <p>Awesome!</p>
      <Button text="Finish Game" onClick={restartGame} />
    </div>
  );
};

export default Result;

Result.propTypes = {
  restartGame: PropTypes.func.isRequired,
};
