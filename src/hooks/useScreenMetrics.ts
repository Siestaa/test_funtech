import { useEffect, useState } from 'react'
import {
	calculateGapBetweenSlides as calcSlides,
	getScreenSize,
} from '../utills/remValues'

export const useScreenMetrics = () => {
	const [metrics, setMetrics] = useState(() => ({
		screenSize: getScreenSize(),
		slidesSettings: calcSlides(),
	}))

	useEffect(() => {
		const updateMetrics = () => {
			setMetrics({
				screenSize: getScreenSize(),
				slidesSettings: calcSlides(),
			})
		}

		window.addEventListener('resize', updateMetrics)
		return () => window.removeEventListener('resize', updateMetrics)
	}, [])

	return metrics
}
