import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './_pages/Login';

import Main from './_pages/Main';
import Request from './_pages/Request';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/request' element={<Request />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;