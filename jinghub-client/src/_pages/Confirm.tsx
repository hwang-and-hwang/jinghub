import React from 'react';
import { Layout } from '../_components/Layout';
import axios from 'axios';
import { useQuery } from 'react-query';

type ConfirmProps = {
  
};

const getJingTodayPath = '/api/today'

const getJingToday = async () => {
  return axios.get(getJingTodayPath).then((res) => res.data);
}

const useJingTodayQuery = () => useQuery(['today'], getJingToday);

const Confirm: React.FC<ConfirmProps> = ({}) => {
  const { data, refetch, isFetching } = useJingTodayQuery();
  return (
    <Layout>
      { isFetching
        ? <div>fetching</div>
        : <div>hello world</div>}
    </Layout>
  );
};

export default Confirm;