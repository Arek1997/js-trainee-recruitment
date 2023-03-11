import ObserverContextProvider from '@/context/ObserverContext';
import type { AppProps } from 'next/app';

import '../styles/index.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ObserverContextProvider>
			<Component {...pageProps} />;
		</ObserverContextProvider>
	);
}
