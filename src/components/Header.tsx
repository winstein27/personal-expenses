import styled from 'styled-components';

import theme from '../styles/theme';

const Bar = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  width: 100%;
  height: 4rem;
  background: ${theme.colors.b};
  padding: 0.5rem;
`;

const Nav = styled.nav`
  height: 100%;
  width: 100%;
`;

const NewExpense = styled.a`
  border-radius: 12px;
  padding: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:hover,
  :active {
    text-decoration: underline;
    color: ${theme.colors.e};
  }
`;

const Header = () => {
  return (
    <Bar>
      <Nav>
        <NewExpense href="#">Add Expense</NewExpense>
      </Nav>
    </Bar>
  );
};

export default Header;
