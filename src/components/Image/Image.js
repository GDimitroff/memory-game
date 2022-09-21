import PropTypes from 'prop-types';

import styles from './Image.module.css';

const Image = ({ url }) => {
  return (
    <div>
      <img src={url} alt="" className={styles.image} />
    </div>
  );
};

export default Image;

Image.propTypes = {
  url: PropTypes.string.isRequired,
};
