import { RefObject, useEffect } from 'react'

export const useIntersectionAnimation = (
	ref: RefObject<HTMLDivElement | null>,
	animate: () => void
) => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						animate()
						observer.unobserve(entry.target)
					}
				})
			},
			{
				threshold: 0.2,
			}
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [ref, animate])
}
