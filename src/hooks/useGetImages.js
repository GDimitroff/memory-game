import { useEffect, useState } from 'react';

import { BASE_URL } from '../utils/constants';
import { getRandomPage } from '../utils/helpers';

const useGetImages = (options) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!options) return;

    const buildUrl = () => {
      let url = new URL(BASE_URL);
      url.search = new URLSearchParams({
        query: options.category,
        orientation: 'square',
        size: 'small',
        per_page: options.mode === 'standard' ? options.cardsCount / 2 : 12,
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
  }, [options]);

  return images;
};

export default useGetImages;
