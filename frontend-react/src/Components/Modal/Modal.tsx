import React, { createContext, useState, useContext, ReactNode } from 'react';
import style from './Modal.module.scss'; // Opravený název importu

interface IModalContext {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface ModalProviderProps {
    children: ReactNode;
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => { setIsModalOpen(false); console.log('Modal closed'); };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      <div className={style[`overlay${isModalOpen ? '' : '__None'}`]}> 
        <div className={style['modal']}>
          Ahoj, tady je nějaký kontext.
          <button className={style['closeButton']} onClick={closeModal}>X</button>
        </div>
      </div>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
