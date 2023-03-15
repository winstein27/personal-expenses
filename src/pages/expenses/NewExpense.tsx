import styled from 'styled-components';
import Button from '../../components/UI/Button';

const Form = styled.form`
  text-align: center;
`;

const InputGroup = styled.div`
  padding: 0.5rem;
`;

const Label = styled.label`
  display: inline-block;
  width: 9rem;
`;

const Input = styled.input`
  width: 20rem;
  text-align: right;
`;

const AddExpense = () => {
  return (
    <Form method="POST">
      <InputGroup>
        <Label htmlFor="">Date</Label>
        <Input type="date" />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="">Value</Label>
        <Input type="number" />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="">Description</Label>
        <Input type="text" />
      </InputGroup>

      <InputGroup>
        <Button>Add Expense</Button>
      </InputGroup>
    </Form>
  );
};

export default AddExpense;
