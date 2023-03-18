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

  &:disabled {
    background: ${theme.colors.disabled};
    cursor: not-allowed;
  }
`;

interface Props {
  children: React.ReactNode;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
}

const Button = (props: Props) => {
  return (
    <StyledButton type={props.type} disabled={props.disabled}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
