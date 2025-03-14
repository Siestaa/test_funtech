import styles from "../about.module.css"
import { AboutStats } from './aboutStats'
import { AboutText } from './aboutText'


export const AboutInfo = () => {
	return (
		<div className={styles.aboutInfo}>
			<AboutText />
			<AboutStats />
		</div>
	)
}
