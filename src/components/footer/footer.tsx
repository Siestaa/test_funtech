import { useEffect, useState } from 'react'
import { getScreenSize } from '../../utills/remValues'
import { Facebook } from '../../utills/svg/facebook'
import { Instagram } from '../../utills/svg/instagram'
import { LinkedIn } from '../../utills/svg/linkedin'
import { Logo } from '../../utills/svg/logo'
import { Twitter } from '../../utills/svg/twitter'
import styles from './footer.module.css'
import { FooterMobile } from './footerMobile'

export const Footer = () => {
	const [screenSize, setScreenSize] = useState(getScreenSize())

	useEffect(() => {
		window.addEventListener('resize', () => setScreenSize(getScreenSize()))

		return () => {
			window.removeEventListener('resize', () => setScreenSize(getScreenSize()))
		}
	}, [])

	return (
		<>
			{screenSize === 'mobile' ? (
				<FooterMobile />
			) : (
				<footer className={styles.footer}>
					<div className={styles.footerInner}>
						<div className={styles.linksList}>
							<a href='#' className={styles.logo}>
								<Logo />
								<span className={styles.logoText}>DiveSea</span>
							</a>
							<nav className={styles.list}>
								<a className={styles.listItem} href='#'>
									Privacy Policy
								</a>
								<a className={styles.listItem} href='#'>
									Term & Conditions
								</a>
								<a className={styles.listItem} href='#'>
									About Us
								</a>
								<a className={styles.listItem} href='#'>
									Contact
								</a>
							</nav>
						</div>
						<div className={styles.socialContainer}>
							<span className={styles.copyright}>
								© 2023 EATLY All Rights Reserved.
							</span>
							<div className={styles.socialList}>
								<a
									className={styles.socialLink}
									href='https://www.instagram.com/'>
									<Instagram />
								</a>
								<a
									className={styles.socialLink}
									href='https://ru.linkedin.com/'>
									<LinkedIn />
								</a>
								<a
									className={styles.socialLink}
									href='https://www.facebook.com/'>
									<Facebook />
								</a>
								<a className={styles.socialLink} href='https://twitter.com/'>
									<Twitter />
								</a>
							</div>
						</div>
					</div>
				</footer>
			)}
		</>
	)
}
