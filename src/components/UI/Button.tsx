import React from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';

const StyledButton = styled.button<{
  variant: 'action' | 'outlined' | 'danger';
}>`
  padding: 0.5rem 1rem;
  border: none;
  background: ${(props) => theme.colors.button[props.variant]};
  color: ${(props) =>
    props.variant !== 'outlined' ? theme.colors.backgroud : theme.colors.e};
  border-radius: 6px;
  display: block;
  margin: 0.5rem auto;

  &:hover,
  :active {
    border: 2px solid black;
  }

  &:disabled {
    background: ${theme.colors.disabled};
    cursor: not-allowed;
  }

  @media (min-width: ${theme.sizes.tablet}) {
    margin: 0.5rem;
    display: inline-block;
  }
`;

interface Props {
  children: React.ReactNode;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  variant?: 'action' | 'outlined' | 'danger';
}

const Button = (props: Props) => {
  return (
    <StyledButton
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      variant={props.variant ? props.variant : 'action'}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
