import { useState, useEffect } from "react";
import { callAPI } from "../api/api";

const useAPI = (
  method,
  key,
  requestData = null,
  autoFetch = true,
  params = null,
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const fetchData = async (overrideData = requestData) => {
    setLoading(true);
    setError(null);
    try {
      const result = await callAPI(method, key, overrideData, params);
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // key가 변경될 때 자동 호출

  return { data, loading, error, fetchData };
};

export default useAPI;
