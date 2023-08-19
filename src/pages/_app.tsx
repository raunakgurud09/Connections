import '../styles/globals.css';
import { AppProps } from 'next/app';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer';
import cx from 'classnames';

import { Bebas_Neue, Saira_Condensed } from 'next/font/google';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Toaster } from '@/components/ui/toast/toaster';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from '../constants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const Bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
});

const Saira = Saira_Condensed({
  subsets: [],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-saira',
});

interface MyAppProps extends AppProps {
  Component: any;
  pageProps: any;
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: MyAppProps): JSX.Element {
  return (
    <>
      <div
        className={cx(
          'm-auto flex h-fit w-full flex-col ',
          `${Saira.variable}`,
          `${Bebas.variable}`
        )}
      >
        <QueryClientProvider client={queryClient}>
          <Header />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className='flex flex-col '>
              <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                <div className='min-h-screen'>
                  <Component {...pageProps} />
                </div>
              </GoogleOAuthProvider>
              <Footer />
            </div>
            <Toaster />
          </LocalizationProvider>
        </QueryClientProvider>
      </div>
      <ToastContainer />
    </>
  );
}

export default MyApp;
