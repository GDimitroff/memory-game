import PropTypes from 'prop-types';

import styles from './Board.module.css';

const HeaderBoard = ({ text, value, description }) => {
  return (
    <header className={styles.header}>
      <p classes={styles.description}>{description}</p>
      <p>
        {text}: {value}
      </p>
    </header>
  );
};

export default HeaderBoard;

HeaderBoard.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
