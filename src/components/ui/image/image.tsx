import { CSSProperties, RefObject } from 'react'
import styles from './image.module.css'

interface ImageContainerStyles extends CSSProperties {
	position?: import('csstype').Property.Position
}

interface ImageProps {
	img: string
	styleImg?: CSSProperties
	styleContainer?: ImageContainerStyles
	ref?: RefObject<HTMLDivElement | null>
	alt?: string
}
export const Image = ({ img, styleImg, styleContainer, ref, alt = '' }: ImageProps) => (
	<div ref={ref} className={styles.imageBox} style={styleContainer}>
		<img className={styles.image} src={`/${img}.jpg`} style={styleImg} alt={alt} />
		<img className={styles.imageShadow} src={`/${img}.jpg`} style={styleImg} alt="" />
	</div>
)