import React, { useEffect, useState, useRef, useCallback } from 'react';

import ReactDOM from 'react-dom';
import { ModalWrapper } from './styles';

const Modal = ({ children, visible, setIsOpen }) => {
  const modalEl = useRef(); //
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalClose = (e) => {
    if (modalEl.current === e.target) {
      setIsOpen(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && !visible) {
        setIsOpen(false);
      }
    },
    [visible],
  );
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, []);
  const modalContent = (
    <ModalWrapper visible={visible} ref={modalEl} onClick={modalClose}>
      {children}
    </ModalWrapper>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
  }
  return null;
};

export default Modal;
