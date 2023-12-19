import { useEffect } from 'react';
import { StyledModal } from './Modal.styled';

export const Modal = ({ isOpen, imageUrl, tags, onCloseModal }) => {
  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape' && isOpen) {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onCloseModal]);

  const onOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };

  return (
    isOpen && (
      <StyledModal onClick={onOverlayClick} className="overlay">
        <div className="modal">
          <img src={imageUrl} alt={tags} />
        </div>
      </StyledModal>
    )
  );
};
