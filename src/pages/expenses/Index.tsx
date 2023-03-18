import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import useFetch from '../../hooks/useFetch';

import theme from '../../styles/theme';

import Expense from '../../components/expenses/ExpenseInterface';

import ExpensesList from '../../components/expenses/ExpensesList';
import ProgressBar from '../../components/UI/ProgressBar';

const NewExpense = styled(Link)`
  text-decoration: none;
  border: 2px solid ${theme.colors.border};
  padding: 1rem;
  display: inline-block;
  margin: auto;
  background: ${theme.colors.e};
  color: ${theme.colors.backgroud};
  border-radius: 12px;
  box-shadow: ${theme.effects.shadow};
`;

const Index = () => {
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
    return (
      <>
        <NewExpense to={'/expenses/new-expense'}>Add new expense</NewExpense>
        <ExpensesList expenses={expenses} />
      </>
    );
  }
};

export default Index;
