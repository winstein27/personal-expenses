import styled from 'styled-components';

import theme from '../../styles/theme';

interface Props {
  date: Date;
}

const ExpenseDate = ({ date }: Props) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  const ExpenseDate = styled.div`
    display: inline-block;
    border: 2px solid black;
    padding: 0.5rem 1rem;
    border-radius: 12px;
    text-align: center;
    background: ${theme.colors.backgroud};
    vertical-align: middle;
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

  return (
    <ExpenseDate>
      <Month>{month}</Month>
      <Year>{year}</Year>
      <Day>{day}</Day>
    </ExpenseDate>
  );
};

export default ExpenseDate;
