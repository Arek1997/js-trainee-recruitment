import { slides } from '@/data/Slides';
import React from 'react';
import SlideItem from '../slide-item/SlideItem';

const SlideList = () => {
	return (
		<>
			{slides.map((slide) => (
				<SlideItem key={Math.random() * 20 + slide.subtitle} {...slide} />
			))}
		</>
	);
};

export default SlideList;
