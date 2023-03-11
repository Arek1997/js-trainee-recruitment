import { transformText } from '@/helpers/functions';
import { Dispatch, SetStateAction } from 'react';

interface Props {
	title: string;
	activeLink: string;
	setActiveLink: Dispatch<SetStateAction<string>>;
}

const MenuItem = ({ title, activeLink, setActiveLink }: Props) => {
	const linkPath = `#${transformText(title)}`;
	const active = linkPath.includes(activeLink) ? 'active' : '';

	return (
		<li>
			<a
				href={linkPath}
				className={`block px-14 py-[10px] text-[14px] font-medium opacity-70 ${active} transition-colors hover:bg-[var(--active-bg-color)] hover:text-[var(--active-color)]`}
				data-section={linkPath}
				onClick={() => setActiveLink(linkPath)}
			>
				{title}
			</a>
		</li>
	);
};

export default MenuItem;
