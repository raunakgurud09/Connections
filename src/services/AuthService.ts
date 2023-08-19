import apiClient from '@/lib/apiClient';

export const getMe = async (): Promise<any> => {
  try {
    const { data } = await apiClient.get('/user/profile');
    const userData = {
      token: data.message,
      user: data.user,
    };
    return userData;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email: string, password: string): Promise<any> => {
  try {
    const url = '/auth/login';
    const { data } = await apiClient.post(url, { email, password });
    const userData = {
      token: data.token,
      message: data.message,
    };
    return userData;
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (
  userId: string,
  userFields: any
): Promise<any> => {
  try {
    const url = `/user/upload-avatar`;
    console.log({ files: userFields });
    const { data } = await apiClient.post(url, { files: userFields });
    return data.result;
  } catch (error) {
    console.log(error);
  }
};

export const register = async ({
  firstName,
  lastName,
  ...rest
}: any): Promise<any> => {
  try {
    const payload = {
      name: {
        firstName,
        lastName,
      },
      ...rest,
    };
    const url = '/auth/register';
    const { data } = await apiClient.post(url, payload);
    console.log(data.data);
    return data.data;
  } catch (error) {
    throw new Error();
  }
};

export const verifyGoogleToken = async (res: any): Promise<any> => {
  try {
    const url = '/auth/google';

    const user = {
      name: {
        firstName: res.given_name,
        lastName: res.family_name,
      },
      _name: res.name,
      email: res.email,
      picture: res.picture,
      email_verified: res.email_verified,
      sub: res.sub,
    };
    const { data } = await apiClient.post(url, { user });
    const userData = {
      token: data.token,
      message: data.message,
    };
    return userData;
  } catch (error) {
    throw new Error();
  }
};

const AuthService = {
  login,
  register,
  getMe,
  updateProfile,
  verifyGoogleToken,
};

export default AuthService;
