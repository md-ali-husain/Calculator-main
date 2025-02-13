import React from 'react';
import ThemeProvider from './context/ThemeContext';
import Calculator from './component/Calculator';

const App = () => {
  return (
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
