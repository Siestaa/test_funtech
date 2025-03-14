import { useEffect, useState } from 'react'
import { getScreenSize } from '../../utills/remValues'
import { Button } from '../ui/button/button'
import { Image } from '../ui/image/image'
import styles from './banner.module.css'

export const Banner = () => {
	const [screenSize, setScreenSize] = useState(getScreenSize())

	useEffect(() => {
		window.addEventListener('resize', () => setScreenSize(getScreenSize()))

		return () => {
			window.removeEventListener('resize', () => setScreenSize(getScreenSize()))
		}
	}, [])

	return (
		<div className={styles.bannerContainer}>
			<div className={styles.banner}>
				<div className={styles.bannerInfo}>
					<h2 className={styles.bannerTitle}>Create and Sell NFTs</h2>
					<span className={styles.bannerText}>World’s Largest NFT Place</span>
					<div className={styles.bannerButtons}>
						<Button text='Explore More' />
						<Button text='Sell Artwork' isBlack />
					</div>
				</div>
				<Image
					img='pic1'
					styleImg={{
						width: screenSize === 'mobile' ? '24.9rem' : '23.0625rem',
						aspectRatio: screenSize === 'mobile' ? '1.95/1' : '1.48/1',
					}}
					styleContainer={{
						position: screenSize === 'mobile' ? 'absolute' : 'relative',
						marginLeft: 'auto',
						marginRight: screenSize === 'mobile' ? 'auto' : '',
						top: screenSize === 'mobile' ? '16.17rem' : '',
						left: screenSize === 'mobile' ? '50%' : '',
						transform: screenSize === 'mobile' ? 'translateX(-50%)' : '',
					}}
				/>
			</div>
		</div>
	)
}
