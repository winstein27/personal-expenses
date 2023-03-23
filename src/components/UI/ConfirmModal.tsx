import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

import theme from '../../styles/theme';

import Backdrop from './Backdrop';
import Button from './Button';

const Modal = styled.div`
  position: fixed;
  z-index: 10;
  width: 80vw;
  left: 50vw;
  transform: translate(-50%, 0);
  background: ${theme.colors.backgroud};
  padding: 1rem;
  border-radius: 12px;

  @media (min-width: ${theme.sizes.tablet}) {
    width: max-content;
  }
`;

const ButtonGroup = styled.div`
  text-align: right;
`;

const Title = styled.h2``;

interface Props {
  children: React.ReactNode;
  closeModal: () => void;
  confirm: () => void;
}

const ConfirmModal = (props: Props) => {
  return (
    <>
      <Backdrop onClick={props.closeModal} />
      {ReactDom.createPortal(
        <Modal>
          <Title>{props.children}</Title>
          <ButtonGroup>
            <Button type="button" variant="danger" onClick={props.confirm}>
              Yes
            </Button>
            <Button type="button" onClick={props.closeModal}>
              No
            </Button>
          </ButtonGroup>
        </Modal>,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
};

export default ConfirmModal;
