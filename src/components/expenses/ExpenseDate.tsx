import styled from 'styled-components';

import theme from '../../styles/theme';

interface Props {
  date: Date;
}

const ExpenseCalendar = styled.div`
  display: inline-block;
  border: 2px solid black;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  text-align: center;
  background: ${theme.colors.backgroud};
  vertical-align: middle;
  width: 30%;

  @media (min-width: ${theme.sizes.tablet}) {
    max-width: 6rem;
  }
`;

const Month = styled.div`
  font-size: 0.8rem;
`;

const Year = styled.div`
  font-size: 1rem;
`;

const Day = styled.div`
  font-weight: ${theme.fontWeights[700]};
  padding: 0.5rem;
`;

const ExpenseDate = ({ date }: Props) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <ExpenseCalendar>
      <Month>{month}</Month>
      <Year>{year}</Year>
      <Day>{day}</Day>
    </ExpenseCalendar>
  );
};

export default ExpenseDate;
