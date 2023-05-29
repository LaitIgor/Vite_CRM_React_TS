import React, {useState} from 'react';
import {Routes, Route, Navigate, useLocation, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Dashboard from './components/Main';
import MyProducts from './components/MyProducts';
import MySales from './components/Sales';
import PersonalCabinet from './components/PersonalCabinet';
import Authentication from './components/authentication';
import CreateAccount from './components/Create-account';
import CreateProductModal from './components/CreateProductModal';
import Snackbar, {SnackbarCloseReason} from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Transition, {SlideProps} from '@mui/material/Slide';

import Context from './store/context';

import styles from './App.module.css'

import {FormValues} from './components/CreateProductModal/createProductModal';
import {SuccessMessage} from './store/context';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isProductEditMode, setIsProductEditMode] = useState<FormValues | null>(null);
  const [successMessage, setSuccessMessage] = useState<SuccessMessage>('')

  const navigate = useNavigate();
  const location = useLocation();

  const userLoggedIn = localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData') ?? '') ;
  const shouldRedirect = userLoggedIn && !userLoggedIn.loggedIn && location.pathname !== '/create-account';

const contex = {
  modalIsOpen, 
  setModalIsOpen,
  isProductEditMode, 
  setIsProductEditMode,
  successMessage,
  setSuccessMessage
}

const handleClose = ( event: React.SyntheticEvent<any> | Event, reason?: SnackbarCloseReason) => {
  if (reason === 'clickaway') {
    return;
  }
  setSuccessMessage(() => '');
};

console.log(modalIsOpen || isProductEditMode, 'modalIsOpen || isProductEditMode');


  return (
    <>
    {shouldRedirect && <Navigate to='/auth'/>}

    <Button 
      sx={{position: 'absolute', top: 0, left: 0, zIndex: 10}}
      onClick={() => navigate(-1)}
    >
      Go to start
    </Button>
    <main className={styles.mainWrapper}>

    <Context.Provider value={{...contex}}>
      <Routes>
        //Add error handling
        <Route
          path="/"
          element={<Dashboard/>}
        />
        <Route
          path="/product"
          element={<MyProducts/>}
        />
        <Route
          path="/sales"
          element={<MySales/>}
        />
        <Route
          path="/personal-cabinet"
          element={<PersonalCabinet/>}
        />
        <Route
          path="/auth"
          element={<Authentication/>}
        />
        <Route
          path="/create-account"
          element={<CreateAccount/>}
        />
        <Route
          path="/*"
          element={<div>No component matched!</div>}
        />

      </Routes>

      {(modalIsOpen || isProductEditMode) && <CreateProductModal />}
    </Context.Provider>

      <Snackbar
        open={!!successMessage}
        onClose={handleClose}
        TransitionComponent={Transition}
        autoHideDuration={3000}
      >
        <Alert onClose={handleClose} severity="success" sx={{ backgroundColor: 'green', color: 'wite', width: '100%' }}>
          Product has been {successMessage} successfully
        </Alert>
      </Snackbar>
    </main>
    </>
  )
}

export default App




