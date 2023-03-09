import styled from 'styled-components';

import Expense from './ExpenseInterface';

import Card from '../UI/Card';

interface Props {
  expenses: Expense[];
}

const ExpensesList = (props: Props) => {
  const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
  `;
  const ListItem = styled.li``;

  return (
    <Card>
      <List>
        {props.expenses.map((expense) => (
          <ListItem key={expense.id}>
            Date: {expense.date.toDateString()} Description:{' '}
            {expense.description} Value: {expense.value}
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default ExpensesList;
