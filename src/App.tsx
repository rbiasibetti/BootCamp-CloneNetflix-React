import React from 'react';
import Login from './screens/login/login.screen';
import { Route, Routes } from 'react-router-dom';
import { LoginPath } from './screens/login/login.types';
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={LoginPath} element={<Login />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
