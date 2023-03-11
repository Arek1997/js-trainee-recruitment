import MenuItem from '../menu-item/MenuItem';

const linksTitles = [
	'Polar Bear',
	'Cheetah',
	'Panda',
	'Fox',
	'Squirrel',
	'Butterfly',
	'Elephant',
];

const MenuList = () => {
	return (
		<ul>
			{linksTitles.map((link, index) => (
				<MenuItem key={index} title={link} />
			))}
		</ul>
	);
};

export default MenuList;
