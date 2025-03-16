const remValuesByScreenSize = {
	mobile: {
		maxWidth: 600,
		baseFontSize: 10.12,
		rem: 1,
	},
	tabletSmall: {
		minWidth: 601,
		maxWidth: 1024,
		baseFontSize: 11.37,
		rem: 1,
	},
	tabletLarge: {
		minWidth: 1025,
		maxWidth: 1439,
		baseFontSize: 13,
		rem: 1,
	},
	hd: {
		minWidth: 1440,
		maxWidth: 1919,
		baseFontSize: 16,
		rem: 1,
	},
	fullHdTo2k: {
		minWidth: 1920,
		maxWidth: 3839,
		baseFontSize: 24,
		rem: 1,
	},
	'4k': {
		minWidth: 3840,
		baseFontSize: 48,
		rem: 1,
	},
}

export const getRemByScreenSize = () => {
	const screenWidth = window.innerWidth

	if (screenWidth >= remValuesByScreenSize['4k'].minWidth) {
		return remValuesByScreenSize['4k'].baseFontSize
	}
	if (
		screenWidth >= remValuesByScreenSize['fullHdTo2k'].minWidth &&
		screenWidth <= remValuesByScreenSize['fullHdTo2k'].maxWidth
	) {
		return remValuesByScreenSize['fullHdTo2k'].baseFontSize
	}
	if (
		screenWidth >= remValuesByScreenSize['hd'].minWidth &&
		screenWidth <= remValuesByScreenSize['hd'].maxWidth
	) {
		return remValuesByScreenSize['hd'].baseFontSize
	}
	if (
		screenWidth >= remValuesByScreenSize['tabletLarge'].minWidth &&
		screenWidth <= remValuesByScreenSize['tabletLarge'].maxWidth
	) {
		return remValuesByScreenSize['tabletLarge'].baseFontSize
	}
	if (
		screenWidth >= remValuesByScreenSize['tabletSmall'].minWidth &&
		screenWidth <= remValuesByScreenSize['tabletSmall'].maxWidth
	) {
		return remValuesByScreenSize['tabletSmall'].baseFontSize
	}
	return remValuesByScreenSize['mobile'].baseFontSize
}

export const getScreenSize = () => {
	const screenWidth = window.innerWidth

	if (screenWidth >= remValuesByScreenSize['4k'].minWidth) {
		return '4k'
	}
	if (
		screenWidth >= remValuesByScreenSize['fullHdTo2k'].minWidth &&
		screenWidth <= remValuesByScreenSize['fullHdTo2k'].maxWidth
	) {
		return 'fullHdTo2k'
	}
	if (
		screenWidth >= remValuesByScreenSize['hd'].minWidth &&
		screenWidth <= remValuesByScreenSize['hd'].maxWidth
	) {
		return 'hd'
	}
	if (
		screenWidth >= remValuesByScreenSize['tabletLarge'].minWidth &&
		screenWidth <= remValuesByScreenSize['tabletLarge'].maxWidth
	) {
		return 'tabletLarge'
	}
	if (
		screenWidth >= remValuesByScreenSize['tabletSmall'].minWidth &&
		screenWidth <= remValuesByScreenSize['tabletSmall'].maxWidth
	) {
		return 'tabletSmall'
	}
	return 'mobile'
}

export const calculateGapBetweenSlides = () => {
	const baseFontSize = getRemByScreenSize()
	const gapRem = 2.5
	const screenWidthPx = window.innerWidth
	const screenWidthRem = screenWidthPx / baseFontSize
	const cardWidthRem = 17.5
	const totalCellWidthRem = cardWidthRem + gapRem // 20rem

	const widthSildes = Math.max(1, Math.ceil(screenWidthRem / totalCellWidthRem))
	const translateValueX = (screenWidthRem - widthSildes) / 2
	const gapBetweenSlides = gapRem * baseFontSize
	console.log(translateValueX)
	return { translateValueX, gapBetweenSlides, baseFontSize }
}
