import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Main from './_pages/Main';
import Request from './_pages/Request';

const Router = () => {
  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/request' element={<Request />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default Router;