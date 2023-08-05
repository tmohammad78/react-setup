import useDataList from './hooks/useTest';
const App = () => {
  const [data, loading] = useDataList(1);
  return (
    <div>
      {loading ? <div>Loading ...</div> : <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default App;
