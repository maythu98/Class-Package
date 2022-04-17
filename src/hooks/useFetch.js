import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";

function useFetch(url, query = []) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const token = useSelector((state) => state.persist.user.token);

  const api = useAxios(token);
  const navigate = useNavigate();

  async function fetchData() {
    try {
      setIsLoading(true);
      const { data } = await api.get(url, {
        params: { ...query },
      });
      setIsLoading(false);
      setData(data);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error);
      navigate("/login");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, errorMessage, setData };
}

export default useFetch;
