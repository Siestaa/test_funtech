import anime from 'animejs'
import { useRef } from 'react'
import { useIntersectionAnimation } from '../../../utills/useIntersectionAnimation'
import { Button } from '../../ui/button/button'
import styles from "../about.module.css"

export const AboutText = () => {

	const titleRef = useRef<HTMLHeadingElement>(null)
	const textRef = useRef<HTMLParagraphElement>(null)
	const buttonsRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	const runAnimation = () => {
		const timeline = anime.timeline({
			easing: 'easeOutQuad',
		})

		timeline
			.add({
				targets: titleRef.current,
				translateY: ['5rem', 0],
				opacity: [0, 1],
				duration: 500,
				delay: 200
			})
			.add({
				targets: textRef.current,
				translateY: ['5rem', 0],
				opacity: [0, 1],
				duration: 500,
				delay: 200
			})
			.add({
				targets: buttonsRef.current,
				translateY: ['5rem', 0],
				opacity: [0, 1],
				duration: 500,
				delay: 200,
				easing: 'easeInOutQuad',
			})
	}

	useIntersectionAnimation(containerRef, runAnimation)

	return (
		<div ref={containerRef} className={styles.aboutTextContainer}>
			<h1 ref={titleRef} className={styles.aboutTextHeader}>Discover And Create NFTs</h1>
			<p ref={textRef} className={styles.aboutTextParagraph}>Discover, Create and Sell NFTs On Our NFT Marketplace<br />With Over Thousands Of NFTs And Get a <b className={styles.boldText}>$20 bonus.</b></p>
			<div ref={buttonsRef} className={styles.buttonContainer}>
				<Button text='Explore More' isBlack style={{ fontFamily: "Poppins", padding: '1.125rem 1.875rem', borderRadius: '12px', fontWeight: '500' }} />
				<Button text='Create NFT' style={{ fontFamily: "Poppins", padding: '1.125rem 1.3125rem', borderRadius: '12px', fontWeight: '500' }} />
			</div>
		</div >
	)
}
