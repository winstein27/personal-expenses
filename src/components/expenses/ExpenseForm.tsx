import React, { useState } from 'react';
import styled from 'styled-components';

import useInput from '../../hooks/useInput';

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
  sendExpense: (date: string, value: string, description: string) => void;
}

const ExpenseForm = (props: Props) => {
  const {
    value: enteredDate,
    valueTouched: enteredDateTouched,
    valueHasError: enteredDateHasError,
    valueChangedHandler: enteredDateChagedHandler,
    valueBlurHandler: enteredDateBlurHandler,
  } = useInput(dateValidation);

  const {
    value: enteredValue,
    valueTouched: enteredValueTouched,
    valueHasError: enteredValueHasError,
    valueChangedHandler: enteredValueChangedHandler,
    valueBlurHandler: enteredValueBlurHandler,
  } = useInput(valueValidation);

  const {
    value: enteredDescription,
    valueTouched: enteredDescriptionTouched,
    valueHasError: enteredDescriptionHasError,
    valueChangedHandler: enteredDescriptionChagedHandler,
    valueBlurHandler: enteredDescriptionBlurHandler,
  } = useInput((value) => value.trim().length === 0);

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
            Add Expense
          </Button>
        </InputGroup>
      </Form>
    </Card>
  );
};

export default ExpenseForm;
