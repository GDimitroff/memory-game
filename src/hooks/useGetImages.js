import { useEffect, useState } from 'react';

import { BASE_URL } from '../utils/constants';
import { getRandomPage } from '../utils/helpers';

const useGetImages = () => {
  const [images, setImages] = useState([]);

  const buildUrl = () => {
    let url = new URL(BASE_URL);
    url.search = new URLSearchParams({
      query: 'nature', //TODO: change to a variable
      orientation: 'square',
      size: 'small',
      per_page: 2, // TODO: change to a variable
      page: getRandomPage(),
    });

    return url;
  };

  useEffect(() => {
    fetch(buildUrl(), {
      headers: {
        Authorization: process.env.REACT_APP_PEXELS_AUTH_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setImages(data.photos));
  }, []);

  return images;
};

export default useGetImages;
