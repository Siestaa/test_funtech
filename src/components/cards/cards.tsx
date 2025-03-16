import { useRef } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { useScreenMetrics } from '../../hooks/useScreenMetrics'
import { createAnimationTimeline } from '../../utills/animationUtils'
import { useIntersectionAnimation } from '../../utills/useIntersectionAnimation'
import styles from './cards.module.css'
import { CARD_LIST } from './cardsList'
import { Card } from './components/card'

export const Cards = () => {
	const swiperRef = useRef<SwiperRef>(null)
	const titleRef = useRef<HTMLHeadingElement>(null)
	const swiperContainerRef = useRef<HTMLDivElement>(null)
	const buttonsRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const { slidesSettings } = useScreenMetrics()

	const animationConfig = {
		easing: 'easeOutQuad',
		duration: 500,
		targets: [
			{ ref: titleRef, translateY: ['5rem', 0], opacity: [0, 1], delay: 200 },
			{ ref: swiperContainerRef, translateY: ['5rem', 0], translateX: [-slidesSettings.translateValueX, -slidesSettings.translateValueX], opacity: [0, 1], delay: 200 },
			{ ref: buttonsRef, translateY: ['5rem', 0], opacity: [0, 1], delay: 200, easing: 'easeInOutQuad' }
		]
	}

	useIntersectionAnimation(containerRef, () => createAnimationTimeline(animationConfig))

	const handleSlide = (direction: 'prev' | 'next') => {
		const swiper = swiperRef.current?.swiper
		if (swiper) {
			direction === 'prev' ? swiper.slidePrev() : swiper.slideNext()
		}
	}

	return (
		<section ref={containerRef} className={styles.cardsContainer}>
			<h2 ref={titleRef} className={styles.cardsTitle}>Weekly - Top NFT</h2>
			<div ref={swiperContainerRef}>
				<Swiper
					ref={swiperRef}
					spaceBetween={slidesSettings.gapBetweenSlides}
					slidesPerView="auto"
					loop={true}
					modules={[Navigation]}
					navigation={false}
					pagination={{ clickable: true }}
				>
					{CARD_LIST.map((card, index) => (
						<SwiperSlide key={`${card.title}-${index}`}>
							<Card {...card} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div ref={buttonsRef} className={styles.cardsButtonContainer}>
				<button className={styles.cardButton} onClick={() => handleSlide('prev')}>
					<img src="/cardArrow.svg" alt="Previous" />
				</button>
				<button className={styles.cardButton} onClick={() => handleSlide('next')}>
					<img src="/cardArrow.svg" alt="Next" />
				</button>
			</div>
		</section>
	)
}