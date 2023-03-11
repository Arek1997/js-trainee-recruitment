import { useObserverContext } from '@/context/ObserverContext';
import { transformText } from '@/helpers/functions';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import parse from 'html-react-parser';

interface Props {
	subtitle: string;
	title: string;
	featured: string;
	imagePath: string;
}

const SlideItem = ({ subtitle, title, featured, imagePath }: Props) => {
	const { setActiveSection } = useObserverContext();
	const [ref] = useInView({
		threshold: 1,
		onChange(_, entry) {
			if (entry.isIntersecting) {
				setActiveSection(entry.target.id);
			}
		},
	});

	const transformedTitle = title.replace(
		featured,
		`<span className='text-[#F2994A]'>${featured}</span>`
	);

	return (
		<section ref={ref} className='mb-20 text-left' id={transformText(subtitle)}>
			<span className='text-[12px] font-bold opacity-70'>{subtitle}</span>
			<h2 className='text-[40px] font-semibold'>{parse(transformedTitle)}</h2>

			<div>
				<Image
					width={1000}
					height={520}
					src={imagePath}
					alt={subtitle}
					className='w-full object-cover'
				/>
			</div>
		</section>
	);
};
export default SlideItem;
