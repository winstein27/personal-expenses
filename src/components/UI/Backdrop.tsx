import ReactDom from 'react-dom';
import styled from 'styled-components';

import theme from '../../styles/theme';

const Div = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${theme.colors.backdrop};
  z-index: 5;
`;

interface Props {
  onClick?: () => void;
}

const Backdrop = (props: Props) => {
  return ReactDom.createPortal(
    <Div onClick={props.onClick}></Div>,
    document.getElementById('backdrop-root') as HTMLElement
  );
};

export default Backdrop;
