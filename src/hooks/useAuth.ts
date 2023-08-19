import { useCallback, useState } from 'react';
import AuthServices from '@/services/AuthService';
import { autoLogin, autoLogout } from '@/utils/auth';
import { mutate } from 'swr';
import { useRouter } from 'next/router';
import jwtDecode from 'jwt-decode';

interface InitialState {
  loggingIn: boolean;
  error: null | string;
}

export const useLogin = () => {
  return useCallback(async (email: string, password: string) => {
    const { token } = await AuthServices.login(email, password);
    autoLogin(token);
    mutate('/api/me');
  }, []);
};

export const useLogins = () => {
  const initialState: InitialState = {
    loggingIn: false,
    error: null,
  };
  const [status, setStatus] = useState(initialState);
  const { loggingIn, error } = status;

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const { token } = await AuthServices.login(email, password);
        autoLogin(token);
        mutate('/api/me');
        setStatus({ loggingIn: false, error: null });
      } catch (error) {
        setStatus({ loggingIn: false, error: 'error occurred' });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [status]
  );
  return { login, loggingIn, error };
};

export const useLogout = () => {
  return useCallback(async () => {
    autoLogout();
    mutate('/api/me');
  }, []);
};

export const useRegister = () => {
  const router = useRouter();
  return useCallback(
    async (values: any) => {
      const res = await AuthServices.register(values);
      console.log(res);
      router.push('/login');
      mutate('/api/me');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};

export const useGoogleLoginHook = () => {
  return useCallback(async (idToken: string) => {
    const res = jwtDecode(idToken);
    const { token } = await AuthServices.verifyGoogleToken(res);
    console.log(token);
    autoLogin(token);
    mutate('/api/me');
  }, []);
};
