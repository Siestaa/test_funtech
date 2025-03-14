import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { calculateSlidesPerView, getScreenSize } from '../../utills/remValues'
import { Button } from '../ui/button/button'
import styles from './navigation.module.css'
import { NavigationMobile } from './navigationMobile'

export const Navigation = () => {
	const [isFixing, setIsFixing] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const { baseFontSize } = calculateSlidesPerView()
	const screenSize = getScreenSize()

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			const offset = baseFontSize * 2

			if (scrollPosition > offset) {
				setIsFixing(true)
			} else {
				setIsFixing(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			{screenSize === 'mobile' ? (
				<NavigationMobile />
			) : (
				<>
					<div
						className={styles.placeholder}
						style={{ height: isFixing ? '9.5rem' : 0 }}
					/>
					<header
						className={clsx(styles.navigation, {
							[styles.navigationFix]: isFixing,
						})}>
						<div className={styles.navigationContainer}>
							<a href='#' className={styles.logoLink}>
								<img className={styles.logo} src='/wave.svg' alt='' />
								<span className={styles.logoText}>DiveSea</span>
							</a>
							<nav className={styles.navigationList}>
								<a href='#' className={styles.navLink}>
									Discover
								</a>
								<a href='#' className={styles.navLink}>
									Creators
								</a>
								<a href='#' className={styles.navLink}>
									Sell
								</a>
								<a href='#' className={styles.navLink}>
									Stats
								</a>
							</nav>
							<Button
								isBlack
								text='Connect Wallet'
								style={{ fontWeight: '600' }}
							/>
							<div
								className={clsx(styles.burger, { [styles.cross]: isOpen })}
								onClick={() => setIsOpen(prev => !prev)}>
								<span />
								<span />
								<span />
							</div>
						</div>
					</header>
				</>
			)}
		</>
	)
}
