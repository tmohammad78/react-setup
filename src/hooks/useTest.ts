import { useEffect, useState } from 'react';

interface IData {
  id: number;
  body: string;
  email: string;
  name: string;
  postId: number;
}

const localCache: Record<string, Array<IData>> = {};

const useDataList = (postNumber: number) => {
  const [data, setData] = useState<[] | IData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!postNumber) {
      setData([]);
    } else if (localCache[postNumber]) {
      setData(localCache[postNumber]);
    } else {
      handleFetchAPI(postNumber).catch(err => {
        console.log(err);
      });
    }
  }, [postNumber]);

  const handleFetchAPI = async (postNumber: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postNumber}/comments`,
      );
      const json = (await response.json()) as IData[];
      localCache[postNumber] = json;
      setData(localCache[postNumber]);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return [data, loading];
};

export default useDataList;
