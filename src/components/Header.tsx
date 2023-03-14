import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NewExpense = styled(Link)`
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
        <List>
          <li>
            <NewExpense to={'/expenses'}>Expenses</NewExpense>
          </li>
        </List>
      </Nav>
    </Bar>
  );
};

export default Header;
