import { GoogleLogin } from '@react-oauth/google';
import Router, { useRouter } from 'next/router';
import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { useGoogleLoginHook } from '@/hooks/useAuth';
import { toast } from 'react-toastify';
// import { GOOGLE_CLIENT_ID } from '@/constants/index';
// import { gapi } from 'gapi-script';


// interface GoogleError {

//   error: string;
//   details: string;
// }

const GoogleLoginCom = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const googleLogin = useGoogleLoginHook();
  const { query } = useRouter();
  const ref = query.ref as string;


  const handleOnSuccess = async (response: any): Promise<void> => {
    try {
      setIsLoggingIn(true);
      const tokenId = response.credential;
      await googleLogin(tokenId);
      setIsLoggingIn(false);
      if (ref) {
        Router.push(`/club/${ref}`);
      } else {
        Router.push('/profile');
      }
    } catch (error: any) {
      console.log(error, "google error")
      toast.error(`er:${error?.message}`);
    } finally {
      setIsLoggingIn(false);
    }
  };

  console.log(isLoggingIn)

  const handleOnFailure = (response: any) => {
    if (response.error === 'popup_closed_by_user') return;
    console.log(response)
    toast.error("Error");
  };

  return (
    <div className='w-full flex items-center justify-center'>
      < GoogleLogin
        onSuccess={(response) => handleOnSuccess(response)}
        onError={() => handleOnFailure}
        useOneTap
      />
    </div>
  )
};

export default GoogleLoginCom;

