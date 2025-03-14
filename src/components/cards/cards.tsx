import { useEffect, useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import styles from './cards.module.css'
import { CARD_LIST } from './cardsList'
import { Card } from './components/card'

import 'swiper/swiper-bundle.css'
import { calculateSlidesPerView } from '../../utills/remValues'

export const Cards = () => {

	const swiperRef = useRef<SwiperRef>(null)
	const [slidesSetting, setSlidesSetting] = useState(calculateSlidesPerView())

	useEffect(() => {
		const handleResize = () => {
			setSlidesSetting(calculateSlidesPerView())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

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

	return (
		<div className={styles.cardsContainer}>
			<h2 className={styles.cardsTitle}>Weekly - Top NFT</h2>
			<Swiper
				ref={swiperRef}
				spaceBetween={slidesSetting.gapBetweenSlides}
				slidesPerView={slidesSetting.slidesPerView + 1}
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
			<div className={styles.cardsButtonContainer}>
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