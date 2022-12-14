import PropTypes from 'prop-types';

import cover from '../assets/images/cover.jpg';
import styles from './Card.module.css';

const Card = ({ card, handleChoice, flipped, disabled, mode }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={styles.card}>
      <div className={flipped ? styles.flipped : ''}>
        {mode === 'standard' && (
          <>
            <img className={styles.front} src={card.url} alt="card front" />
            <img
              className={styles.back}
              src={cover}
              alt="card back"
              onClick={handleClick}
            />
          </>
        )}
        {mode === 'alternate' && (
          <>
            <img
              className={styles.front}
              src={card.url}
              alt="card front"
              onClick={handleClick}
            />
            <img className={styles.back} src={cover} alt="card back" />
          </>
        )}
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  card: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
  handleChoice: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
};
