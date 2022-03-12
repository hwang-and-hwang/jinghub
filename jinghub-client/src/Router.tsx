import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './_pages/Main';


const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
        </Routes>
      </BrowserRouter>
    );
}

export default Router;