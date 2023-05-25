import React from 'react';

import {FormValues} from '../components/CreateProductModal/createProductModal'

export type SuccessMessage = 'deleted' | 'edited' | 'sold' | 'created' | '';

type ContextType = {
    modalIsOpen: boolean;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isProductEditMode: null | FormValues;
    setIsProductEditMode: React.Dispatch<React.SetStateAction<null | FormValues>>;
    successMessage: SuccessMessage;
    setSuccessMessage: React.Dispatch<React.SetStateAction<SuccessMessage>>;
  };

  const context: ContextType = {
    modalIsOpen: false, 
    setModalIsOpen: () => {},
    isProductEditMode: null,
    setIsProductEditMode: () => {},
    successMessage: '',
    setSuccessMessage: () => {},
  }

const Context = React.createContext<ContextType>({...context})
export default Context;