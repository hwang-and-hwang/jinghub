import { useEffect, useState, useMemo } from 'react';
import { Cookies } from 'react-cookie';

export const useCookies = () => {
  const cookie = useMemo(() => new Cookies(), []);
  return useMemo(
    () => ({
      setCookie: (
        name: string,
        value: string,
        options?: { [key: string]: any }
      ) => {
        cookie.set(name, value, options);
      },
      getCookie: (name: string) => cookie.get(name),
      getAllCookie: () => cookie.getAll(),
    }),
    []
  );
};
