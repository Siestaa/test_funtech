import anime from 'animejs/lib/anime.es.js'
import { useEffect, useRef, useState } from 'react'
import { getScreenSize } from '../../utills/remValues'
import { useIntersectionAnimation } from '../../utills/useIntersectionAnimation'
import { Button } from '../ui/button/button'
import { Image } from '../ui/image/image'
import styles from './banner.module.css'

export const Banner = () => {
	const [screenSize, setScreenSize] = useState(getScreenSize())
	const containerRef = useRef<HTMLDivElement>(null)
	const titleRef = useRef<HTMLHeadingElement>(null)
	const textRef = useRef<HTMLSpanElement>(null)
	const buttonsRef = useRef<HTMLDivElement>(null)
	const imageRef = useRef<HTMLDivElement>(null)

	const runAnimation = () => {
		const timeline = anime.timeline({
			easing: 'easeOutQuad',
		})

		timeline
			.add({
				targets: containerRef.current,
				translateX: ['10vw', 0],
				opacity: [0, 1],
				duration: 600,
				delay: 200,
			})
			.add({
				targets: titleRef.current,
				translateY: ['50px', 0],
				opacity: [0, 1],
				duration: 600,
				delay: 200,
			})
			.add({
				targets: textRef.current,
				translateY: ['50px', 0],
				opacity: [0, 1],
				duration: 600,
				delay: 200,
			})
			.add({
				targets: buttonsRef.current,
				translateY: ['50px', 0],
				opacity: [0, 1],
				duration: 600,
				delay: 200,
			})
			.add({
				targets: imageRef.current,
				translateY: ['50px', 0],
				opacity: [0, 1],
				duration: 600,
				delay: 200,
				easing: 'easeInOutQuad',
			})
	}

	useIntersectionAnimation(containerRef, runAnimation)

	useEffect(() => {
		window.addEventListener('resize', () => setScreenSize(getScreenSize()))

		return () => {
			window.removeEventListener('resize', () => setScreenSize(getScreenSize()))
		}
	}, [])

	return (
		<div className={styles.bannerContainer}>
			<div ref={containerRef} className={styles.banner}>
				<div className={styles.bannerInfo}>
					<h2 ref={titleRef} className={styles.bannerTitle}>
						Create and Sell NFTs
					</h2>
					<span ref={textRef} className={styles.bannerText}>
						World’s Largest NFT Place
					</span>
					<div ref={buttonsRef} className={styles.bannerButtons}>
						<Button text='Explore More' />
						<Button text='Sell Artwork' isBlack />
					</div>
				</div>
				<Image
					ref={imageRef}
					img='pic1'
					styleImg={{
						width: screenSize === 'mobile' ? '24.9rem' : '23.0625rem',
						aspectRatio: screenSize === 'mobile' ? '1.95/1' : '1.48/1',
					}}
					styleContainer={{
						position: screenSize === 'mobile' ? 'absolute' : 'relative',
						marginLeft: 'auto',
						marginRight: screenSize === 'mobile' ? 'auto' : '',
						top: screenSize === 'mobile' ? '16.17rem' : '',
						left: screenSize === 'mobile' ? '50%' : '',
						transform: screenSize === 'mobile' ? 'translateX(-50%)' : '',
					}}
				/>
			</div>
		</div>
	)
}
