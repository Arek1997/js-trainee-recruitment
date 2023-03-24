import { useObserverContext } from '@/context/ObserverContext';
import { menuTitles } from '@/data/MenuTitles';
import { useEffect, useState } from 'react';
import MenuItem from '../menu-item/MenuItem';

const MenuList = () => {
	const { activeSection } = useObserverContext();
	const [activeLink, setActiveLink] = useState(activeSection);

	useEffect(() => setActiveLink(activeSection), [activeSection]);

	return (
		<ul>
			{menuTitles.map((link) => (
				<MenuItem
					key={Math.random() * 20 + link}
					title={link}
					activeLink={activeLink}
					setActiveLink={setActiveLink}
				/>
			))}
		</ul>
	);
};

export default MenuList;
