import styles from './ToggleCheckbox.module.css';

const ToggleCheckbox = ({ animationON, toggleAnimation }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={animationON}
          onChange={toggleAnimation}
        />
        <span className={styles.slider}></span>
      </label>
      <p>Animations</p>
    </div>
  );
};

export default ToggleCheckbox;
