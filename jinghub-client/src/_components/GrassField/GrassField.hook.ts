import { useQuery, UseQueryOptions } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { JingShower } from '../../types';

type JingShowerResponse = AxiosResponse<JingShower[]>;

const getJingShowered = async () => {
  const data = axios
    .get<JingShowerResponse>('/api/shower')
    .then((res) => res.data);
  return data;
};

export const useJingShowerQuery = (month: string) =>
  useQuery<JingShowerResponse>(['jing', 'shower', month], getJingShowered, {
    enabled: false,
  });
