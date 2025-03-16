import { useScreenMetrics } from '../../hooks/useScreenMetrics'
import { Logo } from '../../utills/svg/logo'
import styles from './footer.module.css'
import { FooterMobile } from './footerMobile'
import { socialLinks } from './socialLinks'

export const Footer = () => {
	const { screenSize } = useScreenMetrics()

	const DesktopFooter = () => (
		<footer className={styles.footer}>
			<div className={styles.footerInner}>
				<div className={styles.linksList}>
					<a href="#" className={styles.logo}>
						<Logo />
						<span className={styles.logoText}>DiveSea</span>
					</a>
					<nav className={styles.list}>
						{['Privacy Policy', 'Term & Conditions', 'About Us', 'Contact'].map(text => (
							<a key={text} className={styles.listItem} href="#">{text}</a>
						))}
					</nav>
				</div>
				<div className={styles.socialContainer}>
					<span className={styles.copyright}>© 2023 DiveSea All Rights Reserved.</span>
					<div className={styles.socialList}>
						{socialLinks.map(({ href, Icon }, index) => (
							<a key={index} className={styles.socialLink} href={href}><Icon /></a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)

	return screenSize === 'mobile' ? <FooterMobile /> : <DesktopFooter />
}