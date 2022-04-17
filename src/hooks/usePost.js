import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAxios from "./useAxios";

function usePost(url, body) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const token = useSelector((state) => state.persist.user.token);

  const api = useAxios(token);

  async function fetchData() {
    try {
      setIsLoading(true);
      const { data } = await api.post(url, body);
      setIsLoading(false);
      setData(data);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, errorMessage, setData };
}

export default usePost;
