import anime from 'animejs'

export const createAnimationTimeline = (config: {
	easing: string
	duration: number
	targets: Array<{
		ref: React.RefObject<HTMLElement | null>
		[key: string]: any
	}>
}) => {
	const timeline = anime.timeline({ easing: config.easing })

	config.targets.forEach(target => {
		if (target.ref.current) {
			timeline.add({
				targets: target.ref.current,
				duration: config.duration,
				...target,
			})
		}
	})

	return timeline
}
