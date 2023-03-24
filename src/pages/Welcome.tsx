import styled from 'styled-components';

import theme from '../styles/theme';

const Box = styled.div`
  background: ${theme.colors.active};
  padding: 2rem;
  width: fit-content;
  margin: auto;
  border-radius: 12px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: ${theme.colors.text};
`;

const Welcome = () => {
  return (
    <Box>
      <Title>Welcome to Personal Expenses!</Title>
    </Box>
  );
};

export default Welcome;
