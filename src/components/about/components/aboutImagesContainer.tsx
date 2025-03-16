import { useRef } from 'react'
import { useScreenMetrics } from '../../../hooks/useScreenMetrics'
import { createAnimationTimeline } from '../../../utills/animationUtils'
import { useIntersectionAnimation } from '../../../utills/useIntersectionAnimation'
import { Image } from '../../ui/image/image'
import styles from '../about.module.css'

export const AboutImagesContainer = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const imageBox1Ref = useRef<HTMLDivElement>(null)
	const imageBox2Ref = useRef<HTMLDivElement>(null)
	const arrowRef = useRef<HTMLImageElement>(null)
	const { screenSize } = useScreenMetrics()

	const animationConfig = {
		easing: 'easeOutQuad',
		duration: 1000,
		targets: [
			{ ref: imageBox1Ref, translateX: ['100vw', 0] },
			{ ref: imageBox2Ref, translateX: ['100vw', 0] },
			{ ref: arrowRef, opacity: [0, 1], easing: 'easeInOutQuad' }
		]
	}

	useIntersectionAnimation(containerRef, () => createAnimationTimeline(animationConfig))

	const getImageStyles = () => ({
		image1: {
			width: screenSize === 'mobile' ? '20.75rem' : '24.375rem',
			aspectRatio: '1/1'
		},
		image2: {
			width: screenSize === 'mobile' ? '16.8rem' : '20rem',
			aspectRatio: '1/1'
		},
		arrow: {
			width: '8em',
			aspectRatio: '1.03/1',
			position: 'absolute' as const,
			top: '3.875rem',
			left: screenSize === 'mobile' ? '21.64rem' : '26rem'
		}
	})

	const stylesConfig = getImageStyles()

	return (
		<div ref={containerRef} className={styles.imagesContainer}>
			<Image
				ref={imageBox1Ref}
				img="pic1"
				styleImg={stylesConfig.image1}
				styleContainer={{ top: '1.125rem', left: '0' }}
			/>
			<img ref={arrowRef} src="/arrow.svg" style={stylesConfig.arrow} />
			<Image
				ref={imageBox2Ref}
				img="pic5"
				styleImg={stylesConfig.image2}
				styleContainer={{
					top: '12.5rem',
					left: screenSize === 'mobile' ? '22.63rem' : '26.9375rem'
				}}
			/>
			<div className={styles.dottedBack} />
		</div>
	)
}