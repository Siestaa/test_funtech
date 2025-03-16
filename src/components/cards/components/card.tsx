import { useEffect, useState } from 'react'
import { Button } from '../../ui/button/button'
import styles from '../cards.module.css'

export interface CardProps {
	img: string
	title: string
	status: string
	price: number
	currentTimer: number
}

export const Card = ({ img, title, status, price, currentTimer }: CardProps) => {
	const [timeLeft, setTimeLeft] = useState(currentTimer)

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(prev => Math.max(0, prev - 1))
		}, 1000)
		return () => clearInterval(timer)
	}, [])

	const formatTime = (seconds: number) => {
		const hours = Math.floor(seconds / 3600)
		const minutes = Math.floor((seconds % 3600) / 60)
		const secs = seconds % 60
		return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`
	}

	return (
		<div className={styles.card}>
			<img className={styles.cardImage} src={`/${img}.jpg`} alt={title} />
			<div className={styles.cardInfo}>
				<h3 className={styles.cardTitle}>{title}</h3>
				<span className={styles.cardStatus}>{status}</span>
				<div className={styles.cardPrice}>
					<img src="/ethereum.svg" alt="Ethereum" />
					<span>{price}</span>
				</div>
				<span className={styles.cardTimer}>{formatTime(timeLeft)}</span>
				<Button
					text="PLACE BID"
					isBlack
					style={{
						gridColumn: '2/3',
						gridRow: '2/4',
						fontSize: '0.875rem',
						fontWeight: '600',
					}}
				/>
			</div>
		</div>
	)
}