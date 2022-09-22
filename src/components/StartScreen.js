import styles from './StartScreen.module.css';

const StartScreen = ({ onClick }) => {
  return (
    <div className={styles.wrapper}>
      <h1>Memory Game</h1>
      <button className={styles.button} onClick={onClick}>
        Start
      </button>
    </div>
  );
};

export default StartScreen;