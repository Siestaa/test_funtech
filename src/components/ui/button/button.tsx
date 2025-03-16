import clsx from 'clsx'
import { CSSProperties, MouseEvent } from 'react'
import styles from './button.module.css'

interface ButtonProps {
	isBlack?: boolean
	link?: string
	onClick?: () => void
	text: string
	style?: CSSProperties
	type?: 'button' | 'submit' | 'reset'
	disabled?: boolean
}

export const Button = ({
	isBlack,
	link,
	onClick,
	text,
	style,
	type = 'button',
	disabled,
}: ButtonProps) => {
	const handleClick = (e: MouseEvent) => {
		e.preventDefault()
		onClick?.()
	}

	const buttonClasses = clsx(styles.button, {
		[styles.backButton]: isBlack,
		[styles.disabled]: disabled,
	})

	const commonProps = {
		className: buttonClasses,
		style,
		children: text,
	}

	if (link) {
		return <a href={link} {...commonProps} />
	}

	return (
		<button
			type={type}
			onClick={handleClick}
			disabled={disabled}
			{...commonProps}
		/>
	)
}