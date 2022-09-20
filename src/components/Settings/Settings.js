import Classic from './Classic';
import styles from './Settings.module.css';

const Settings = ({ startGame, gameMode }) => {
  return (
    <section className={styles.settings}>
      {gameMode === 'classic' && <Classic startGame={startGame} />}
    </section>
  );
};

export default Settings;
