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
  background: ${theme.colors.action};
  color: ${theme.colors.backgroud};
  border-radius: 12px;
  box-shadow: ${theme.effects.shadow};
`;

const YearFilter = styled.select`
  display: block;
  padding: 0.5rem 1.5rem;
  border: 2px solid ${theme.colors.border};
  border-radius: 8px;
  margin: 0.5rem 0;
  text-align: center;
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
          date: new Date(data[key].date + 'T01:00:00'),
        });
      }

      setExpenses(loadedExpenses);
    };

    fetchExpenses({}, loadExpenses);
  }, [fetchExpenses]);

  return isLoading ? (
    <ProgressBar />
  ) : (
    <>
      <NewExpense to={'/expenses/new-expense'}>Add new expense</NewExpense>
      <YearFilter>
        <option value="0">All</option>
        <option value="2023">2023</option>
        <option value="2023">2022</option>
        <option value="2023">2021</option>
        <option value="2023">2020</option>
      </YearFilter>
      <ExpensesList expenses={expenses} />
    </>
  );
};

export default Index;
