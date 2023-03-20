import { useNavigate } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

import ExpenseForm from '../../components/expenses/ExpenseForm';
import ProgressBar from '../../components/UI/ProgressBar';

const NewExpense = () => {
  const { isLoading, error, sendRequest } = useFetch();
  const navigate = useNavigate();

  const sendExpense = async (
    date: string,
    value: string,
    description: string
  ) => {
    const newDate = new Date(date);
    const day = newDate.getDay();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();

    await sendRequest(
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: {
          date: `${month}-${day}-${year}`,
          value: Number.parseFloat(value),
          description: description,
        },
      },
      () => null
    );

    if (!error) {
      navigate('/expenses');
    }
  };

  if (isLoading) {
    return <ProgressBar />;
  }

  return <ExpenseForm sendExpense={sendExpense} />;
};

export default NewExpense;
