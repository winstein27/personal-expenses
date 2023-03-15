import React from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: ${theme.colors.e};
  color: ${theme.colors.backgroud};
  border-radius: 6px;

  &:hover,
  :active {
    border: 2px solid black;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
