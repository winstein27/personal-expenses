import { useNavigate } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

import ExpenseForm from '../../components/expenses/ExpenseForm';
import ProgressBar from '../../components/UI/ProgressBar';

const NewExpense = () => {
  const { isLoading, error, sendRequest } = useFetch();
  const navigate = useNavigate();

  const sendExpense = async (
    isUpdating: boolean,
    date: string,
    value: string,
    description: string,
    id?: string
  ) => {
    await sendRequest(
      {
        method: isUpdating ? 'PUT' : 'POST',
        headers: { 'Content-type': 'application/json' },
        body: {
          date: date,
          value: Number.parseFloat(value),
          description: description,
        },
      },
      () => null,
      id
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
