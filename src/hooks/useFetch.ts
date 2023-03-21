import { useState, useCallback } from 'react';

interface Config {
  method?: 'GET' | 'POST' | 'PUT';
  headers?: { 'Content-type': string };
  body?: any;
}

const BASE_URL =
  'https://personal-expenses-6afff-default-rtdb.firebaseio.com/expenses';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (
      requestConfig: Config,
      loadData: (data: any) => void,
      id?: string
    ) => {
      setIsLoading(true);
      setError(null);

      const URL = (id ? BASE_URL + `/${id}` : BASE_URL) + '.json';

      try {
        const response = await fetch(URL, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        if (!response.ok) {
          throw new Error('Request failed.');
        }

        const data = await response.json();
        loadData(data);
      } catch (error: unknown) {
        console.log(error);
      }

      setIsLoading(false);
    },
    []
  );

  return { isLoading, error, sendRequest };
};

export default useFetch;
