import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Loader from '../components/Loader/loader';
import { useState, useEffect } from 'react';
import { Quicksand } from '@next/font/google';
import { QueryClientProvider, QueryClient } from 'react-query';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const quicksand = Quicksand({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000);
    
    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {
        loading ? <Loader message="Chargement..." /> : (
          <>
            <style jsx global>
              {`html {font-family: ${quicksand.style.fontFamily};}`}
            </style>
            <Provider store={store}>
              <Component {...pageProps} />
              <ToastContainer theme='dark' autoClose={10000} />
            </Provider>
          </>
        )
      }
    </QueryClientProvider>
  )
}
