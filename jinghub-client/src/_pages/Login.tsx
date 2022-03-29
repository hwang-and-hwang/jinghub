import React from 'react';
import { Layout } from '../_components/Layout';
import { LoginForm } from '../_components/LoginForm';

type LoginProps = {
  
};

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default Login;