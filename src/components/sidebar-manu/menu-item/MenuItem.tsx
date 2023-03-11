interface Props {
	title: string;
	active?: boolean;
}

const MenuItem = ({ title, active }: Props) => {
	const linkPath = title.toLowerCase().replaceAll(' ', '-');

	const activeLink = active ? 'active' : '';

	return (
		<li>
			<a
				href={`#${linkPath}`}
				className={`block px-14 py-[10px] text-[14px] font-medium opacity-70 ${activeLink} transition-colors hover:bg-[var(--active-bg-color)] hover:text-[var(--active-color)]`}
				data-section={linkPath}
			>
				{title}
			</a>
		</li>
	);
};

export default MenuItem;
