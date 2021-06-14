import styled from 'styled-components';

export const ModalWrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
`;
