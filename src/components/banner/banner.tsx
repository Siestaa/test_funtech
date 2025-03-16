import { useRef } from 'react'
import { useScreenMetrics } from '../../hooks/useScreenMetrics'
import { createAnimationTimeline } from '../../utills/animationUtils'
import { useIntersectionAnimation } from '../../utills/useIntersectionAnimation'
import { Button } from '../ui/button/button'
import { Image } from '../ui/image/image'
import styles from './banner.module.css'

export const Banner = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const titleRef = useRef<HTMLHeadingElement>(null)
	const textRef = useRef<HTMLSpanElement>(null)
	const buttonsRef = useRef<HTMLDivElement>(null)
	const imageRef = useRef<HTMLDivElement>(null)
	const { screenSize } = useScreenMetrics()

	const animationConfig = {
		easing: 'easeOutQuad',
		duration: 600,
		targets: [
			{ ref: containerRef, translateX: ['10vw', 0], opacity: [0, 1], delay: 200 },
			{ ref: titleRef, translateY: ['50px', 0], opacity: [0, 1], delay: 200 },
			{ ref: textRef, translateY: ['50px', 0], opacity: [0, 1], delay: 200 },
			{ ref: buttonsRef, translateY: ['50px', 0], opacity: [0, 1], delay: 200 },
			{
				ref: imageRef,
				translateY: ['50px', 0],
				opacity: [0, 1],
				delay: 200,
				easing: 'easeInOutQuad'
			}
		]
	}

	useIntersectionAnimation(containerRef, () => createAnimationTimeline(animationConfig))

	const getImageStyles = () => ({
		styleImg: {
			width: screenSize === 'mobile' ? '24.9rem' : '23.0625rem',
			maxWidth: '70vw',
			aspectRatio: screenSize === 'mobile' ? '1.95/1' : '1.48/1',
		},
		styleContainer: {
			position: screenSize === 'mobile' ? 'absolute' as const : 'relative' as const,
			marginLeft: 'auto',
			...(screenSize === 'mobile' && {
				marginRight: 'auto',
				bottom: '-8.8rem',
				left: '50%',
				transform: 'translateX(-50%)',
				maxWidth: '70vw'
			}),
		}
	})

	return (
		<section className={styles.bannerContainer}>
			<div ref={containerRef} className={styles.banner}>
				<div className={styles.bannerInfo}>
					<h2 ref={titleRef} className={styles.bannerTitle}>
						Create and Sell NFTs
					</h2>
					<span ref={textRef} className={styles.bannerText}>
						World’s Largest NFT Place
					</span>
					<div ref={buttonsRef} className={styles.bannerButtons}>
						<Button text="Explore More" />
						<Button text="Sell Artwork" isBlack />
					</div>
				</div>
				<Image
					ref={imageRef}
					img="pic1"
					{...getImageStyles()}
				/>
			</div>
		</section>
	)
}