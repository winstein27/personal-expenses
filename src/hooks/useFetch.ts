import { useState, useCallback } from 'react';

interface Config {
  method?: 'GET' | 'POST';
  headers?: { 'Content-type': string };
  body?: any;
}

const URL =
  'https://personal-expenses-6afff-default-rtdb.firebaseio.com/expenses.json';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig: Config, loadData: (data: any) => void) => {
      setIsLoading(true);
      setError(null);

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
