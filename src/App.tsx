import React from 'react';
import Login from './screens/login/login.screen';
import { Route, Routes } from 'react-router-dom';
import { LoginPath } from './screens/login/login.types';
function App() {
  return (
    <div>
      <Routes>
        <Route path={LoginPath} element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
