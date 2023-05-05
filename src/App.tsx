import {Routes, Route} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Dashboard from './components/Main';
import Project from './components/Project';
import Customers from './components/Customers';
import Income from './components/Income';
import Promote from './components/Promote';
import Help from './components/Help';
import './App.css'

function App() {

  return (
    <>
    <Sidebar/>

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
        path="/customers"
        element={<Customers/>}
      />
      <Route
        path="/income"
        element={<Income/>}
      />
      <Route
        path="/promote"
        element={<Promote/>}
      />
      <Route
        path="/help"
        element={<Help/>}
      />
      <Route
        path="/*"
        element={<div>No component matched!</div>}
      />


    </Routes>
    </>
  )
}

export default App
