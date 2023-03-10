import React from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';

interface Props {
  children: React.ReactNode;
}

const Div = styled.div`
  background: ${theme.colors.cardBackground};
  padding: 1rem;
  margin: 2rem 0;
  border-radius: 12px;
  box-shadow: ${theme.effects.shadow};
`;

const Card = ({ children }: Props) => {
  return <Div>{children}</Div>;
};

export default Card;
