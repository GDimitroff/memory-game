import styles from './ToggleCheckbox.module.css';

const ToggleCheckbox = ({ animationON, toggleAnimation }) => {
  const wrapperClasses = `${styles.button} ${styles.r} ${styles.center} ${styles['button-3']}`;

  return (
    <>
      <label htmlFor="">Animation</label>
      <div className={wrapperClasses}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={animationON}
          onChange={toggleAnimation}
        />
        <div className={styles.knobs}></div>
        <div className={styles.layer}></div>
      </div>
    </>
  );
};

export default ToggleCheckbox;
