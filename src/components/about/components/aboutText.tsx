import { useRef } from 'react'
import { createAnimationTimeline } from '../../../utills/animationUtils'
import { useIntersectionAnimation } from '../../../utills/useIntersectionAnimation'
import { Button } from '../../ui/button/button'
import styles from '../about.module.css'

export const AboutText = () => {
	const titleRef = useRef<HTMLHeadingElement>(null)
	const textRef = useRef<HTMLParagraphElement>(null)
	const buttonsRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	const animationConfig = {
		easing: 'easeOutQuad',
		duration: 500,
		targets: [
			{ ref: titleRef, translateY: ['5rem', 0], opacity: [0, 1], delay: 200 },
			{ ref: textRef, translateY: ['5rem', 0], opacity: [0, 1], delay: 200 },
			{
				ref: buttonsRef,
				translateY: ['5rem', 0],
				opacity: [0, 1],
				delay: 200,
				easing: 'easeInOutQuad'
			}
		]
	}

	useIntersectionAnimation(containerRef, () => createAnimationTimeline(animationConfig))

	const buttonStyles = {
		fontFamily: 'Poppins',
		padding: '1.125rem 1.875rem',
		borderRadius: '12px',
		fontWeight: '500'
	} as const

	return (
		<div ref={containerRef} className={styles.aboutTextContainer}>
			<h1 ref={titleRef} className={styles.aboutTextHeader}>
				Discover And Create NFTs
			</h1>
			<p ref={textRef} className={styles.aboutTextParagraph}>
				Discover, Create and Sell NFTs On Our NFT Marketplace<br />
				With Over Thousands Of NFTs And Get a <b className={styles.boldText}>$20 bonus.</b>
			</p>
			<div ref={buttonsRef} className={styles.buttonContainer}>
				<Button text="Explore More" isBlack style={buttonStyles} />
				<Button
					text="Create NFT"
					style={{ ...buttonStyles, padding: '1.125rem 1.3125rem' }}
				/>
			</div>
		</div>
	)
}