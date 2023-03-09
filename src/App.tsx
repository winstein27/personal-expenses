import styled from 'styled-components';

import Expenses from './components/Expenses';

const Container = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

const App = () => {
  return (
    <Container>
      <Expenses />
    </Container>
  );
};

export default App;
