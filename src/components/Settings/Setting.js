import styles from './Setting.module.css';

const Setting = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <h4>{title}</h4>
      <div className={styles.setting}>{children}</div>
    </div>
  );
};

export default Setting;
