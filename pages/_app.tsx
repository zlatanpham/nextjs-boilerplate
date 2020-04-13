import '../styles/index.css';
import App from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

NProgress.configure({ showSpinner: false, speed: 1000 });

const NProgressHandler = () => {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleComplete = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return null;
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <NProgressHandler />
        <Component {...pageProps} />
      </>
    );
  }
}
export default MyApp;
