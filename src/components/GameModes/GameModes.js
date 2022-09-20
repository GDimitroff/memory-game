import styles from './GameModes.module.css';

const GameModes = ({ onSelectGameMode }) => {
  return (
    <section className={styles.wrapper}>
      <h1>Memory Game</h1>
      <div className={styles.modes}>
        <div
          className={styles.mode}
          onClick={() => onSelectGameMode('classic')}>
          Classic
        </div>
        <div className={styles.mode} onClick={() => onSelectGameMode('modern')}>
          Modern
        </div>
      </div>
    </section>
  );
};

export default GameModes;
