import React from 'react';
import { Layout } from '../_components/Layout';
import { Form } from '../_components/Form';

type RequestProps = {
  
};

const Request: React.FC<RequestProps> = ({}) => {
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