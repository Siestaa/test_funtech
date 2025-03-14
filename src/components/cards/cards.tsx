import anime from 'animejs/lib/anime.es.js'
import { useEffect, useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { useIntersectionAnimation } from '../../utills/useIntersectionAnimation'
import styles from './cards.module.css'
import { CARD_LIST } from './cardsList'
import { Card } from './components/card'

import 'swiper/swiper-bundle.css'
import { calculateSlidesPerView } from '../../utills/remValues'

export const Cards = () => {
	const swiperRef = useRef<SwiperRef>(null)
	const titleRef = useRef<HTMLHeadingElement>(null)
	const swiperContainerRef = useRef<HTMLDivElement>(null)
	const buttonsRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const [slidesSetting, setSlidesSetting] = useState(calculateSlidesPerView())

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
				targets: swiperContainerRef.current,
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

	const handlePrevClick = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slidePrev()
		}
	}

	const handleNextClick = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideNext()
		}
	}

	useEffect(() => {
		const handleResize = () => {
			setSlidesSetting(calculateSlidesPerView())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<div ref={containerRef} className={styles.cardsContainer}>
			<h2 ref={titleRef} className={styles.cardsTitle}>Weekly - Top NFT</h2>
			<div ref={swiperContainerRef}>
				<Swiper
					ref={swiperRef}
					spaceBetween={slidesSetting.gapBetweenSlides}
					slidesPerView={slidesSetting.slidesPerView}
					loop={true}
					modules={[Navigation]}
					navigation={false}
					pagination={{ clickable: true }}
				>
					{CARD_LIST.map((card, index) => (
						<SwiperSlide key={`${card.title}-${index}`}>
							<Card
								img={card.img}
								title={card.title}
								status={card.status}
								price={card.price}
								currentTimer={card.currentTimer}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div ref={buttonsRef} className={styles.cardsButtonContainer}>
				<button className={styles.cardButton} type="button" onClick={handlePrevClick}>
					<img src="/cardArrow.svg" />
				</button>
				<button className={styles.cardButton} type="button" onClick={handleNextClick}>
					<img src="/cardArrow.svg" />
				</button>
			</div>
		</div>
	)
}