import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from './cookie.hooks';
import { Layout } from '../_components/Layout';
import { Form } from '../_components/Form';

type RequestProps = {
  
};

const Request: React.FC<RequestProps> = ({}) => {
  const { getCookie } = useCookies();
  const navigate = useNavigate();
  useEffect(() => {
    if(!getCookie('session')) navigate('/login');
  }, [navigate])

  return (
    <Layout direction="column">
      <header>
        <h3>오늘의 샤워 인증</h3>
      </header>
      <Form />
    </Layout>
  );
};

export default Request;