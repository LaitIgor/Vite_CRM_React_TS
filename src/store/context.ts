import React from 'react';

type ContextType = {
    modalIsOpen: boolean;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };

const Context = React.createContext<ContextType>({modalIsOpen: false, setModalIsOpen: () => {}})
export default Context;