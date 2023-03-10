import { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import theme from '../../styles/theme';

const Container = styled.div`
  width: 100%;
  height: 10px;
  background: ${theme.colors.b};
  position: relative;
`;

const ProgressBar = () => {
  const [position, setPosition] = useState(0);

  setTimeout(() => {
    setPosition((prevPosition) => {
      return prevPosition === 100 ? 0 : prevPosition + 1;
    });
  }, 20);

  const Fill = styled.div`
    width: 8%;
    height: 100%;
    background: ${theme.colors.d};
    position: absolute;
    left: ${position}%;
  `;

  const bar = (
    <Container>
      <Fill />
    </Container>
  );

  return ReactDOM.createPortal(
    bar,
    document.getElementById('progress-root') as HTMLElement
  );
};

export default ProgressBar;
