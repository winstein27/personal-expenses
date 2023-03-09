import React from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';

interface Props {
  children: React.ReactNode;
}

const Div = styled.div`
  background: ${theme.COLORS.cardBackground};
  padding: 1rem;
  margin: 2rem 0;
  border-radius: 12px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Card = ({ children }: Props) => {
  return <Div>{children}</Div>;
};

export default Card;
