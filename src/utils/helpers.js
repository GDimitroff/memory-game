export const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);

export const transformData = (data) => {
  return data.map((pic, index) => ({
    id: index,
    url: pic.src.small,
    matched: false,
  }));
};
