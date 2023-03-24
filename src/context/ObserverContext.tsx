import { createContext, useState, useContext } from 'react';

const ObserverContext = createContext({
	activeSection: '',
	setActiveSection: (value: string) => {},
});

interface Props {
	children: React.ReactNode;
}

const ObserverContextProvider = ({ children }: Props) => {
	const [activeSection, setActiveSection] = useState('');

	return (
		<ObserverContext.Provider value={{ activeSection, setActiveSection }}>
			{children}
		</ObserverContext.Provider>
	);
};

export default ObserverContextProvider;

export const useObserverContext = () => useContext(ObserverContext);
