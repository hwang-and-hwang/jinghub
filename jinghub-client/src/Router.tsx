import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './_pages/Login';

import Main from './_pages/Main';
import Request from './_pages/Request';
import Confirm from './_pages/Confirm';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/request' element={<Request />} />
            <Route path='/login' element={<Login />} />
            <Route path='/confirm' element={<Confirm />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;