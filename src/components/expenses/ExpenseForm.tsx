import React, { useState } from 'react';
import styled from 'styled-components';

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
    return false;
  }

  return parsedDate.getTime() <= new Date().getTime();
};

const valueValidation = (value: string) => {
  // value must be a number
  if (value.trim() === '' || isNaN(value as unknown as number)) {
    return false;
  }

  // if value is decimal, must have at most 2 digits after dot
  let valid = true;
  if (value.includes('.')) {
    valid = value.indexOf('.') >= value.length - 3;
  }

  // value must be positive
  return valid && Number.parseFloat(value) > 0;
};

interface Props {
  sendExpense: (date: string, value: string, description: string) => void;
}

const ExpenseForm = (props: Props) => {
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredDateTouched, setEnteredDateTouched] = useState(false);

  const [enteredValue, setEnteredValue] = useState('');
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredDescriptionTouched, setEnteredDescriptionTouched] =
    useState(false);

  const enteredDateIsValid = dateValidation(enteredDate);
  const enteredValueIsValid = valueValidation(enteredValue);
  const enteredDescriptionIsValid = enteredDescription.trim().length > 0;

  const formIsValid =
    enteredDateIsValid && enteredValueIsValid && enteredDescriptionIsValid;

  const formSubmissionHandler = (event: React.FormEvent) => {
    event.preventDefault();

    setEnteredDateTouched(true);
    setEnteredValueTouched(true);
    setEnteredDescriptionTouched(true);

    if (formIsValid) {
      props.sendExpense(enteredDate, enteredValue, enteredDescription);
    }
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
            onChange={(event) => setEnteredDate(event.target.value)}
            onBlur={() => setEnteredDateTouched(true)}
            invalid={enteredDateTouched && !enteredDateIsValid}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="value">Value</Label>
          <Input
            id="value"
            type="number"
            step=".01"
            value={enteredValue}
            onChange={(event) => setEnteredValue(event.target.value)}
            onBlur={() => setEnteredValueTouched(true)}
            invalid={enteredValueTouched && !enteredValueIsValid}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            type="text"
            value={enteredDescription}
            onChange={(event) => setEnteredDescription(event.target.value)}
            onBlur={() => setEnteredDescriptionTouched(true)}
            invalid={enteredDescriptionTouched && !enteredDescriptionIsValid}
          />
        </InputGroup>

        <InputGroup>
          <Button type="submit" disabled={!formIsValid}>
            Add Expense
          </Button>
        </InputGroup>
      </Form>
    </Card>
  );
};

export default ExpenseForm;
