import Button from '../UI/Button';
import styles from './Board.module.css';

const HeaderBoard = ({ text, value, restartGame, gameEnd }) => {
  return (
    <header className={styles.header}>
      {gameEnd && <Button text="New Game" onClick={restartGame} />}
      <p>
        {text}: {value}
      </p>
    </header>
  );
};

export default HeaderBoard;
