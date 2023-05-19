import {Routes, Route, Navigate, useLocation, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Dashboard from './components/Main';
import Project from './components/Project';
import Customers from './components/Customers';
import PersonalCabinet from './components/PersonalCabinet';
import Authentication from './components/authentication';
import CreateAccount from './components/Create-account';
import styles from './App.module.css'

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const userLoggedIn = localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData') ?? '') ;
  const shouldRedirect = userLoggedIn && !userLoggedIn.loggedIn && location.pathname !== '/create-account';

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

    <Routes>
      //Add error handling
      <Route
        path="/"
        element={<Dashboard/>}
      />
      <Route
        path="/product"
        element={<Project/>}
      />
      <Route
        path="/sales"
        element={<Customers/>}
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

    </main>
    </>
  )
}

export default App
