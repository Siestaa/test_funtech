import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Facebook } from '../../utills/svg/facebook'
import { Instagram } from '../../utills/svg/instagram'
import { LinkedIn } from '../../utills/svg/linkedin'
import { Twitter } from '../../utills/svg/twitter'
import { Button } from '../ui/button/button'
import styles from './navigation.module.css'

export const NavigationMobile = () => {
	const [isFixing, setIsFixing] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			const offset = 33

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
			<div
				className={styles.placeholder}
				style={{ height: isFixing ? '9.5rem' : 0 }}
			/>
			<header
				className={clsx(styles.navigation, {
					[styles.navigationFix]: isFixing,
				})}>
				<div className={styles.navigationContainer}>
					<div className={styles.menu}>
						<a href='#' className={styles.logoLink}>
							<img className={styles.logo} src='/wave.svg' alt='' />
							<span className={styles.logoText}>DiveSea</span>
						</a>
						<div
							className={clsx(styles.burger, { [styles.cross]: isOpen })}
							onClick={() => setIsOpen(prev => !prev)}>
							<span />
							<span />
							<span />
						</div>
					</div>
				</div>
				<div className={styles.navigationContainerMobile}>
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
					<div className={styles.socials}>
						<a className={styles.socialLink} href='https://www.instagram.com/'>
							<Instagram />
						</a>
						<a className={styles.socialLink} href='https://ru.linkedin.com/'>
							<LinkedIn />
						</a>
						<a className={styles.socialLink} href='https://www.facebook.com/'>
							<Facebook />
						</a>
						<a className={styles.socialLink} href='https://twitter.com/'>
							<Twitter />
						</a>
					</div>
					<Button isBlack text='Connect Wallet' style={{ fontWeight: '600' }} />
				</div>
			</header>
		</>
	)
}
