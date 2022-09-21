import Classic from './Classic';
import Modern from './Modern';
import styles from './Settings.module.css';

const Settings = ({ startGame, gameMode }) => {
  return (
    <section className={styles.settings}>
      {gameMode === 'classic' && <Classic startGame={startGame} />}
      {gameMode === 'modern' && <Modern startGame={startGame} />}
    </section>
  );
};

export default Settings;
