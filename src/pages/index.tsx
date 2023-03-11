import SidebarMenu from '@/components/sidebar-manu/SidebarMenu';
import Slides from '@/components/slides/Slides';

export default function Home() {
	return (
		<div className='my-[15%] mx-auto flex max-w-[720px] gap-x-20 text-center'>
			<SidebarMenu />
			<Slides />
		</div>
	);
}
