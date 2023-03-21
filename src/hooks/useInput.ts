import React, { useState } from 'react';

const useInput = (validation: (value: string) => boolean) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valueTouched, setValueTouched] = useState(false);

  const valueHasError = validation(enteredValue);

  const valueChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setValueTouched(true);
  };

  const updateValue = (value: string) => {
    setEnteredValue(value);
  };

  return {
    value: enteredValue,
    valueTouched,
    valueHasError,
    valueChangedHandler,
    valueBlurHandler,
    updateValue,
  };
};

export default useInput;
