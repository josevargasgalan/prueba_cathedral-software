import React from 'react';
import ShellPage from './pages/shell-page/shell.page';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ShellPage></ShellPage>
    </BrowserRouter>
  );
}

export default App;
