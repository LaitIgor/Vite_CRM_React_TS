import React from 'react';

import {FormValues} from '../components/CreateProductModal/createProductModal'

type ContextType = {
    modalIsOpen: boolean;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isProductEditMode: null | FormValues;
    setIsProductEditMode: React.Dispatch<React.SetStateAction<null | FormValues>>;
  };

  const context = {
    modalIsOpen: false, 
    setModalIsOpen: () => {},
    isProductEditMode: null,
    setIsProductEditMode: () => {},
  }

const Context = React.createContext<ContextType>({...context})
export default Context;