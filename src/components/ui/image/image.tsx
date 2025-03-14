import { CSSProperties, RefObject } from 'react'
import styles from './image.module.css'

interface ImageProps {
	img: string,
	styleImg?: CSSProperties,
	styleContainer?: CSSProperties,
	ref?: RefObject<HTMLDivElement | null>
}

export const Image = ({ img, styleImg, styleContainer, ref }: ImageProps) => {
	return (
		<div
			ref={ref}
			className={styles.imageBox}
			style={styleContainer}>
			<img
				className={styles.image}
				src={`/${img}.jpg`}
				style={styleImg}
			/>
			<img
				className={styles.imageShadow}
				src={`/${img}.jpg`}
				style={styleImg}
			/>
		</div>
	)
}
