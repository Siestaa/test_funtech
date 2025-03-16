import styles from './about.module.css'
import { AboutImagesContainer } from './components/aboutImagesContainer'
import { AboutInfo } from './components/aboutInfo'

export const About = () => (
	<section className={styles.aboutContainer}>
		<div className={styles.about}>
			<AboutInfo />
			<AboutImagesContainer />
		</div>
	</section>
)
