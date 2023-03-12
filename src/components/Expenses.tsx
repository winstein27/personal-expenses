import { useState, useEffect } from 'react';

import useFetch from '../hooks/useFetch';

import Expense from './expenses/ExpenseInterface';

import ExpensesList from './expenses/ExpensesList';
import ProgressBar from './UI/ProgressBar';

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

  if (isLoading) {
    return <ProgressBar />;
  } else {
    return <ExpensesList expenses={expenses} />;
  }
};

export default Expenses;
