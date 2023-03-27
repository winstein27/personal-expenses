import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import useFetch from '../../hooks/useFetch';

import theme from '../../styles/theme';

import Expense from '../../components/expenses/ExpenseInterface';

import ExpensesList from '../../components/expenses/ExpensesList';
import ProgressBar from '../../components/UI/ProgressBar';
import Filters from '../../components/expenses/Filters';

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

const defaultYearFilter = '0';

const Index = () => {
  const [expenses, setExpenses] = useState([] as Expense[]);
  const { isLoading, error, sendRequest: fetchExpenses } = useFetch();
  const [yearFilter, setYearFilter] = useState<string>(defaultYearFilter);

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

      setExpenses(
        loadedExpenses.sort((a, b) =>
          a.date.getTime() < b.date.getTime() ? 1 : -1
        )
      );
    };

    fetchExpenses({}, loadExpenses);
  }, [fetchExpenses]);

  const expensesList =
    yearFilter === defaultYearFilter
      ? expenses
      : expenses.filter(
          (expense) => expense.date.getFullYear() === +yearFilter
        );

  const yearsList: string[] = [];

  expenses.forEach((expense) => {
    const year = expense.date.getFullYear().toString();
    if (!yearsList.includes(year)) {
      yearsList.push(year);
    }
  });

  return isLoading ? (
    <ProgressBar />
  ) : (
    <>
      <NewExpense to={'/expenses/new-expense'}>Add new expense</NewExpense>
      <Filters
        year={yearFilter}
        yearChangedHandler={(year: string) => setYearFilter(year)}
        yearsList={yearsList}
      />
      <ExpensesList expenses={expensesList} />
    </>
  );
};

export default Index;
