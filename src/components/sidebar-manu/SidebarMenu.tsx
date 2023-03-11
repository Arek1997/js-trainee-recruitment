import MenuList from './menu-list/MenuList';

const SidebarMenu = () => {
	return (
		<div className='h-[500px] w-full max-w-[320px] rounded-md bg-white text-left text-lg font-medium'>
			<h4 className='p-6 text-[18px]'>Your new gang</h4>
			<MenuList />
		</div>
	);
};

export default SidebarMenu;
