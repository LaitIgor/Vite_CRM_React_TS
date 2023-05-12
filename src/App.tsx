import {Routes, Route, Navigate, Link, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Main';
import Project from './components/Project';
import Customers from './components/Customers';
import Income from './components/Income';
import Authentication from './components/authentication';
import CreateAccount from './components/create-account';
import styles from './App.module.css'

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const location = useNavigate();

  console.log(location, 'location');
  

  let loggedIn;

    if (Math.random() > 0.7) {
      console.log('User is not logged in');
      loggedIn = true;
    }
      

  return (
    <>
    {/* {loggedIn && <Navigate to='auth'/>} */}
    <Button 
      sx={{position: 'absolute', top: 0, left: 0, zIndex: 10}}
      onClick={() => location(-1)}
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
        element={<Income/>}
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
