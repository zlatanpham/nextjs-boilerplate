import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false, speed: 1000 });

// Include method to turn off the progressbar for some cases like shallow routing
export const nprogressUtil = (() => {
  let blocked = false;
  return {
    isBlocked() {
      return blocked;
    },
    setBlock() {
      blocked = true;
      setTimeout(() => {
        blocked = false;
      });
    },
  };
})();

export default function NProgressHandler() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      if (nprogressUtil.isBlocked()) {
        return;
      }
      NProgress.start();
    };
    const handleComplete = () => {
      if (nprogressUtil.isBlocked()) {
        return;
      }
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
}
