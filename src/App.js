import Background from './components/Background';
import useGetImages from './hooks/useGetImages';

const App = () => {
  const images = useGetImages();

  console.log(images);

  return (
    <div>
      <Background />
      <h1>App</h1>
    </div>
  );
};

export default App;
