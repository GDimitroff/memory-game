import { useEffect, useState } from 'react';

import { BASE_URL } from '../utils/constants';
import { getRandomPage } from '../utils/helpers';

const useGetImages = (gameOptions) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!gameOptions) return;

    const buildUrl = () => {
      let url = new URL(BASE_URL);
      url.search = new URLSearchParams({
        query: gameOptions.category,
        orientation: 'square',
        size: 'small',
        per_page: gameOptions.cardsCount / 2,
        page: getRandomPage(),
      });

      return url;
    };

    const fetchData = async () => {
      const url = buildUrl();

      const response = await fetch(url, {
        headers: {
          Authorization: process.env.REACT_APP_PEXELS_AUTH_KEY,
        },
      });

      const data = await response.json();
      setImages(data.photos);
    };

    fetchData();
  }, [gameOptions]);

  return images;
};

export default useGetImages;
