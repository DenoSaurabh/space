import { useEffect } from 'react';
import { IdProvider } from '@radix-ui/react-id';
import { AppProps, NextWebVitalsMetric } from 'next/app';

import { globalStyles } from '@styled';
import useSettings from '@state/settings';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const isDarkTheme = useSettings((state) => state.darkTheme);

  globalStyles();

  useEffect(() => {
    if (!document.body) return;

    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  console.log(`${metric.name}: ${metric.value}`);
}

export default MyApp;
