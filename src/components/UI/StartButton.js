import styles from './StartButton.module.css';

const StartButton = ({ onClick }) => {
  return (
    <div className={styles.wrapper}>
      <h1>Memory Game</h1>
      <button className={styles.button} onClick={onClick}>
        Start
      </button>
    </div>
  );
};

export default StartButton;
