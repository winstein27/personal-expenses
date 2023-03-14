import styled from 'styled-components';

import theme from '../styles/theme';

const Box = styled.div`
  background: ${theme.colors.cardBackground};
  padding: 2rem;
  width: fit-content;
  margin: auto;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const Welcome = () => {
  return (
    <Box>
      <Title>Welcome to Personal Expenses!</Title>
    </Box>
  );
};

export default Welcome;
