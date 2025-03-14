import { Facebook } from '../../utills/svg/facebook'
import { Instagram } from '../../utills/svg/instagram'
import { LinkedIn } from '../../utills/svg/linkedin'
import { Logo } from '../../utills/svg/logo'
import { Twitter } from '../../utills/svg/twitter'
import styles from './footer.module.css'

export const FooterMobile = () => {
	return (
		<footer className={styles.footerMobile}>
			<div className={styles.footerInner}>
				<div className={styles.linksList}>
					<a href='#' className={styles.logo}>
						<Logo />
						<span className={styles.logoText}>DiveSea</span>
					</a>
					<div className={styles.socialList}>
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
				<span className={styles.copyright}>
					© 2023 DiveSea All Rights Reserved.
				</span>
			</div>
		</footer>
	)
}
