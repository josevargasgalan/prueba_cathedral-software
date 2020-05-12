import React from 'react';
import MainPage from './pages/main-page/main.page';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainPage></MainPage>
    </BrowserRouter>
  );
}

export default App;
