import clsx from 'clsx'
import { CSSProperties } from 'react'
import styles from './button.module.css'

interface ButtonProps {
	isBlack?: boolean
	link?: string
	onClick?: () => void
	text: string
	style?: CSSProperties
}

export const Button = ({
	isBlack,
	link,
	onClick,
	text,
	style,
}: ButtonProps) => {
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault()
		if (onClick) onClick()
	}

	return (
		<>
			{link ? (
				<a
					href={link}
					className={clsx(styles.button, { [styles.backButton]: isBlack })}
					style={style}>
					{text}
				</a>
			) : (
				<button
					onClick={handleClick}
					className={clsx(styles.button, { [styles.backButton]: isBlack })}
					style={style}>
					{text}
				</button>
			)}
		</>
	)
}
