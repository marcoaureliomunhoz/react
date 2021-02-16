import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './hooks/theme';
import { AuthProvider } from './hooks/auth';

ReactDOM.render(
  <ThemeProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>
  , document.getElementById('root')
);
