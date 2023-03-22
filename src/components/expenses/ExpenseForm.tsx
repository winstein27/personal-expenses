import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import useInput from '../../hooks/useInput';
import useFetch from '../../hooks/useFetch';

import theme from '../../styles/theme';

import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';

const Form = styled.form`
  text-align: center;
  width: 100%;
`;

const InputGroup = styled.div`
  padding: 0.5rem;
`;

const Label = styled.label`
  display: inline-block;
  width: 9rem;
`;

const Input = styled.input<{ invalid: boolean }>`
  width: 80%;
  text-align: right;
  border: ${(props) =>
    props.invalid ? '1px solid ' + theme.colors.invalidBorder : ''};
  background: ${(props) =>
    props.invalid ? theme.colors.invalidBackground : ''};

  @media (min-width: ${theme.sizes.tablet}) {
    width: 20rem;
  }
`;

const dateValidation = (date: string) => {
  const parsedDate = new Date(date);

  if (parsedDate.toString() === 'Invalid Date') {
    return true;
  }

  return parsedDate.getTime() > new Date().getTime();
};

const valueValidation = (value: string) => {
  // value must be a number
  if (value.trim() === '' || isNaN(value as unknown as number)) {
    return true;
  }

  // if value is decimal, must have at most 2 digits after dot
  let invalid = false;
  if (value.includes('.')) {
    invalid = value.indexOf('.') < value.length - 3;
  }

  // value must be positive
  return invalid || Number.parseFloat(value) <= 0;
};

interface Props {
  sendExpense: (
    isUpdating: boolean,
    date: string,
    value: string,
    description: string,
    id?: string
  ) => void;
}

const ExpenseForm = (props: Props) => {
  const params = useParams();
  const { error, isLoading, sendRequest } = useFetch();
  const navigate = useNavigate();

  const isUpdating = params.id !== undefined;

  const {
    value: enteredDate,
    valueTouched: enteredDateTouched,
    valueHasError: enteredDateHasError,
    valueChangedHandler: enteredDateChagedHandler,
    valueBlurHandler: enteredDateBlurHandler,
    updateValue: updateDate,
  } = useInput(dateValidation);

  const {
    value: enteredValue,
    valueTouched: enteredValueTouched,
    valueHasError: enteredValueHasError,
    valueChangedHandler: enteredValueChangedHandler,
    valueBlurHandler: enteredValueBlurHandler,
    updateValue,
  } = useInput(valueValidation);

  const {
    value: enteredDescription,
    valueTouched: enteredDescriptionTouched,
    valueHasError: enteredDescriptionHasError,
    valueChangedHandler: enteredDescriptionChagedHandler,
    valueBlurHandler: enteredDescriptionBlurHandler,
    updateValue: updateDescription,
  } = useInput((description) => description.trim().length === 0);

  useEffect(() => {
    const loadExpense = (data: any) => {
      updateDate(data.date);
      updateValue(data.value.toString());
      updateDescription(data.description);
    };

    if (isUpdating) {
      sendRequest({}, loadExpense, params.id);
    }
  }, [sendRequest, params.id]);

  const formIsValid =
    !enteredDateHasError &&
    !enteredValueHasError &&
    !enteredDescriptionHasError;

  const formSubmissionHandler = (event: React.FormEvent) => {
    event.preventDefault();

    enteredDateBlurHandler();
    enteredValueBlurHandler();
    enteredDescriptionBlurHandler();

    if (formIsValid) {
      props.sendExpense(
        isUpdating,
        enteredDate,
        enteredValue,
        enteredDescription,
        params.id
      );
    }
  };

  const navigateToExpensesList = () => {
    navigate('/expenses');
  };

  const deleteExpense = () => {
    if (!params.id) {
      return;
    }

    sendRequest({ method: 'DELETE' }, () => null, params.id);

    navigateToExpensesList();
  };

  return (
    <Card>
      <Form method="POST" onSubmit={formSubmissionHandler}>
        <InputGroup>
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={enteredDate}
            onChange={enteredDateChagedHandler}
            onBlur={enteredDateBlurHandler}
            invalid={enteredDateTouched && enteredDateHasError}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="value">Value</Label>
          <Input
            id="value"
            type="number"
            step=".01"
            value={enteredValue}
            onChange={enteredValueChangedHandler}
            onBlur={enteredValueBlurHandler}
            invalid={enteredValueTouched && enteredValueHasError}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            type="text"
            value={enteredDescription}
            onChange={enteredDescriptionChagedHandler}
            onBlur={enteredDescriptionBlurHandler}
            invalid={enteredDescriptionTouched && enteredDescriptionHasError}
          />
        </InputGroup>

        <InputGroup>
          <Button type="submit" disabled={!formIsValid}>
            {isUpdating ? 'Update Expense' : 'Add Expense'}
          </Button>
          <Button
            type="button"
            variant="outlined"
            onClick={navigateToExpensesList}
          >
            Back
          </Button>
          {isUpdating && (
            <Button type="button" variant="danger" onClick={deleteExpense}>
              Delete
            </Button>
          )}
        </InputGroup>
      </Form>
    </Card>
  );
};

export default ExpenseForm;
