import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

const Container = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-top: 5rem;
`;

const Root = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Root;
