import { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import theme from '../../styles/theme';
import Backdrop from './Backdrop';

const Container = styled.div`
  width: 100%;
  height: 10px;
  background: ${theme.colors.b};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
`;

interface FillProps {
  position: number;
}

const Fill = styled.div<FillProps>`
  width: 8%;
  height: 100%;
  background: ${theme.colors.d};
  position: absolute;
  left: ${(props) => props.position}%;
`;

const ProgressBar = () => {
  const [position, setPosition] = useState(0);

  setTimeout(() => {
    setPosition((prevPosition) => {
      return prevPosition === 100 ? 0 : prevPosition + 1;
    });
  }, 20);

  const bar = (
    <Container>
      <Fill position={position} />
    </Container>
  );

  return (
    <>
      <Backdrop />
      {ReactDOM.createPortal(
        <>{bar}</>,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
};

export default ProgressBar;
