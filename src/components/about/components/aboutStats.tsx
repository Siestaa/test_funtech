import anime from 'animejs'
import { useRef } from 'react'
import { useIntersectionAnimation } from '../../../utills/useIntersectionAnimation'
import styles from "../about.module.css"

const STATS = [
	{
		amount: '430K+',
		title: 'Art Works'
	},
	{
		amount: '159K+',
		title: 'Creators'
	}, {
		amount: '87K+',
		title: 'Collections'
	}
]

export const AboutStats = () => {

	const statsRef = useRef<HTMLDivElement>(null)

	const runAnimation = () => {
		const timeline = anime.timeline({
			easing: 'easeOutQuad',
		})

		const statItems = statsRef.current?.querySelectorAll(`.${styles.statItem}`)

		statItems?.forEach((item, index) => {
			timeline.add({
				targets: item,
				translateY: ['5rem', 0],
				opacity: [0, 1],
				duration: 500,
				delay: index === 0 ? 2300 : anime.stagger(200)
			})
		})
	}

	useIntersectionAnimation(statsRef, runAnimation)

	return (
		<div ref={statsRef} className={styles.aboutStats}>
			{STATS.map((stat) => (
				<div className={styles.statItem} key={stat.title}>
					<h2 className={styles.statAmount}>{stat.amount}</h2>
					<p className={styles.statTitle}>{stat.title}</p>
				</div>
			))}
		</div>
	)
}
