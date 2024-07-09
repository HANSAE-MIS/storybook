import React from 'react';
import style from './ModalPopup.module.css';
import { MdCloseIcon } from './MdCloseIcon';

interface ButtonProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const ModalPopup = ({
  children,
  onClose,
  ...props
}: ButtonProps) => {


  return (
    <div className={style.modalPopupWrap} onClick={(event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    }}>
        <div className={style.modalContentWrap}>
          <button className={style.modalCloseBtn} onClick={() => onClose()}>
            <MdCloseIcon />
          </button>
          {children}
        </div>
    </div>
  );
};
