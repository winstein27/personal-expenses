import styled from 'styled-components';

import Expenses from './components/Expenses';
import Header from './components/Header';

const Container = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-top: 5rem;
`;

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Expenses />
      </Container>
    </>
  );
};

export default App;
