import anime from 'animejs'
import { useRef } from 'react'
import { getScreenSize } from '../../../utills/remValues'
import { useIntersectionAnimation } from '../../../utills/useIntersectionAnimation'
import { Image } from '../../ui/image/image'
import styles from '../about.module.css'

export const AboutImagesContainer = () => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const imageBox1Ref = useRef<HTMLDivElement | null>(null)
	const imageBox2Ref = useRef<HTMLDivElement | null>(null)
	const arrowRef = useRef<HTMLImageElement | null>(null)

	const screenSize = getScreenSize()

	const runAnimation = () => {
		const timeline = anime.timeline({
			easing: 'easeOutQuad',
		})

		timeline
			.add({
				targets: imageBox1Ref.current,
				translateX: ['100vw', 0],
				duration: 1000,
			})
			.add({
				targets: imageBox2Ref.current,
				translateX: ['100vw', 0],
				duration: 1000,
			})
			.add({
				targets: arrowRef.current,
				opacity: [0, 1],
				duration: 1000,
				easing: 'easeInOutQuad',
			})
	}

	useIntersectionAnimation(containerRef, runAnimation)

	return (
		<div ref={containerRef} className={styles.imagesContainer}>
			<Image
				ref={imageBox1Ref}
				img='pic1'
				styleImg={{ width: screenSize === 'mobile' ? '20.75rem' : '24.375rem', aspectRatio: '1/1' }}
				styleContainer={{ top: '1.125rem', left: '0' }}
			/>
			<img
				ref={arrowRef}
				src='/arrow.svg'
				style={{
					width: '8em',
					aspectRatio: '1.03/1',
					position: 'absolute',
					top: '3.875rem',
					left: screenSize === 'mobile' ? '21.64rem' : '26rem',
				}}
			/>
			<Image
				ref={imageBox2Ref}
				img='pic5'
				styleImg={{ width: screenSize === 'mobile' ? '16.8rem' : '20rem', aspectRatio: '1/1' }}
				styleContainer={{ top: '12.5rem', left: screenSize === 'mobile' ? '22.63rem' : '26.9375rem' }}
			/>
			<div className={styles.dottedBack}></div>
		</div>
	)
}
