import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import useGetImages from '../../hooks/useGetImages';
import Loader from '../UI/Loader';
import styles from './Board.module.css';

const Board = ({ gameOptions }) => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useGetImages(gameOptions);
  console.log(gameOptions);

  useEffect(() => {
    if (images.length > 0) {
      setIsLoading(false);
    }
  }, [images]);

  return <div>{isLoading && <Loader />}</div>;
};

export default Board;
