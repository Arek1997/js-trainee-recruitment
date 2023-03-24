import SidebarMenu from '@/components/sidebar-manu/SidebarMenu';
import Slides from '@/components/slides/Slides';

export default function Home() {
	return (
		<div className='my-[100px] mx-auto flex max-w-[1200px] gap-x-20 text-center'>
			<SidebarMenu />
			<Slides />
		</div>
	);
}
