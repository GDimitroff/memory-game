import styles from './Board.module.css';

const HeaderBoard = ({ text, value }) => {
  return (
    <header className={styles.header}>
      <p>
        {text}: {value}
      </p>
    </header>
  );
};

export default HeaderBoard;
