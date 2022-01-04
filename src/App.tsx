import React from 'react';
import Login from './screens/login/login.screen';
import { LoginPath } from './screens/login/login.types';
import { HomePath } from './screens/home/home.types';
import Home from './screens/home/home.screen';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme';
import { Provider } from 'react-redux';
import store from './store/store/store';
import { GlobalStyle } from './themes/main/global-style';
import UserGuard from './components/routers/user-guard/user-guard.component';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate()

  useEffect(
    () => {
      navigate(HomePath)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  )

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path={LoginPath} element={<Login />} />
          <Route path={HomePath} element={<UserGuard><Home /></UserGuard>} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
