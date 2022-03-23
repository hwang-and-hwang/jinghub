import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './_pages/Main';
import Request from './_pages/Request';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/request' element={<Request />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;