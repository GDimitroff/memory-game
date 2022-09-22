import PropTypes from 'prop-types';

import styles from './Card.module.css';
import cover from '../../assets/images/cover.jpg';

const Card = ({ card, onCardClick }) => {
  const handleClick = () => {
    if (card.isShown || card.isFound) return;

    onCardClick(card.uniqueId);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div>
        <img className={styles.front} src={card.url} alt="card front" />
        <img className={styles.back} src={cover} alt="card back" />
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  card: PropTypes.shape({
    uniqueId: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    isShown: PropTypes.bool.isRequired,
    isFound: PropTypes.bool.isRequired,
  }),
  onCardClick: PropTypes.func.isRequired,
};
