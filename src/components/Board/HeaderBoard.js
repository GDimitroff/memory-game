import Button from '../UI/Button';
import styles from './Board.module.css';

const HeaderBoard = ({ turns, restartGame, gameEnd }) => {
  return (
    <header className={styles.header}>
      {gameEnd && <Button text="New Game" onClick={restartGame} />}
      <p>Turn: {turns}</p>
    </header>
  );
};

export default HeaderBoard;
