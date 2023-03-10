import styled from 'styled-components';

import Expense from './ExpenseInterface';

import theme from '../../styles/theme';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

interface Props {
  expenses: Expense[];
}

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ExpenseItem = styled.li`
  margin: 0.5rem 0;
  &:hover {
    box-shadow: ${theme.effects.shadow};
    border: 1px solid ${theme.colors.e};
    border-radius: 12px;
  }
`;

const Description = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 0 1rem;
  width: 25%;

  @media (min-width: ${theme.sizes.tablet}) {
    width: calc(100% - 16rem);
  }
`;

const Value = styled.div`
  display: inline-block;
  vertical-align: middle;
  border: 2px solid black;
  padding: 0.5rem;
  border-radius: 12px;
  background: ${theme.colors.e};
  color: ${theme.colors.backgroud};
  width: 33%;
  text-align: center;

  @media (min-width: ${theme.sizes.tablet}) {
    max-width: 8rem;
  }
`;

const ExpensesList = (props: Props) => {
  return (
    <Card>
      <List>
        {props.expenses.map((expense) => (
          <ExpenseItem key={expense.id}>
            <ExpenseDate date={expense.date} />
            <Description>{expense.description}</Description>
            <Value>$ {expense.value.toFixed(2)}</Value>
          </ExpenseItem>
        ))}
      </List>
    </Card>
  );
};

export default ExpensesList;
