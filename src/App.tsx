import {Routes, Route, Navigate} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Dashboard from './components/Main';
import Project from './components/Project';
import Customers from './components/Customers';
import Income from './components/Income';
import Authentication from './components/authentication';
import styles from './App.module.css'

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);

  let loggedIn;

    if (Math.random() > 0.7) {
      console.log('User is not logged in');
      loggedIn = true;
    }
      

  return (
    <>
    {/* {loggedIn && <Navigate to='auth'/>} */}
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
        path="/*"
        element={<div>No component matched!</div>}
      />

    </Routes>

    </main>
    </>
  )
}

export default App
