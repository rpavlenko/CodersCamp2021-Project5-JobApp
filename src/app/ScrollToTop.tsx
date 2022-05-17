import { useEffect } from 'react';
import { useLocation } from 'react-router';
import * as React from 'react';

export const ScrollToTop = (props: { children: React.ReactNode }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};
