import { useState, useEffect } from 'react';

import useFetch from '../hooks/useFetch';

import ProgressBar from './UI/ProgressBar';

interface Expense {
  id: string;
  value: number;
  description: string;
  date: Date;
}

const Expenses = () => {
  const [expenses, setExpenses] = useState([] as Expense[]);
  const { isLoading, error, sendRequest: fetchExpenses } = useFetch();

  useEffect(() => {
    const loadExpenses = (data: any) => {
      const loadedExpenses = [];

      for (const key in data) {
        loadedExpenses.push({
          id: key,
          value: data[key].value as number,
          description: data[key].description as string,
          date: new Date(data[key].date),
        });
      }

      setExpenses(loadedExpenses);
    };

    fetchExpenses({}, loadExpenses);
  }, [fetchExpenses]);

  console.log(expenses);

  if (isLoading) {
    return <ProgressBar />;
  } else {
    return <h1>Ok</h1>;
  }
};

export default Expenses;
