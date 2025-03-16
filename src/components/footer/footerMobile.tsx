import { Logo } from '../../utills/svg/logo'
import styles from './footer.module.css'
import { socialLinks } from './socialLinks'

export const FooterMobile = () => (
	<footer className={styles.footerMobile}>
		<div className={styles.footerInner}>
			<div className={styles.linksList}>
				<a href="#" className={styles.logo}>
					<Logo />
					<span className={styles.logoText}>DiveSea</span>
				</a>
				<div className={styles.socialList}>
					{socialLinks.map(({ href, Icon }, index) => (
						<a key={index} className={styles.socialLink} href={href}><Icon /></a>
					))}
				</div>
				<nav className={styles.list}>
					{['Privacy Policy', 'Term & Conditions', 'About Us', 'Contact'].map(text => (
						<a key={text} className={styles.listItem} href="#">{text}</a>
					))}
				</nav>
			</div>
			<span className={styles.copyright}>© 2023 DiveSea All Rights Reserved.</span>
		</div>
	</footer>
)