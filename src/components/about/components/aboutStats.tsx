import { useRef, useCallback } from 'react'
import { createAnimationTimeline } from '../../../utills/animationUtils'
import { useIntersectionAnimation } from '../../../utills/useIntersectionAnimation'
import styles from '../about.module.css'

const STATS = [
  { amount: '430K+', title: 'Art Works' },
  { amount: '159K+', title: 'Creators' },
  { amount: '87K+', title: 'Collections' }
] as const

export const AboutStats = () => {
  const statsRef = useRef<HTMLDivElement>(null)

  const animate = useCallback(() => {
    const elements = statsRef.current?.querySelectorAll<HTMLElement>(`.${styles.statItem}`)
    if (!elements) return

    const targets = Array.from(elements).map((element, index) => ({
      ref: { current: element },
      translateY: ['5rem', 0],
      opacity: [0, 1],
      delay: index === 0 ? 2300 : index * 200
    }))

    return createAnimationTimeline({
      easing: 'easeOutQuad',
      duration: 500,
      targets
    })
  }, [])

  useIntersectionAnimation(statsRef, animate)

  return (
    <div ref={statsRef} className={styles.aboutStats}>
      {STATS.map((stat) => (
        <div key={stat.title} className={styles.statItem}>
          <h2 className={styles.statAmount}>{stat.amount}</h2>
          <p className={styles.statTitle}>{stat.title}</p>
        </div>
      ))}
    </div>
  )
}