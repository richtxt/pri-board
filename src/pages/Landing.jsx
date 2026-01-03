import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Landing({ onGetStarted }) {
    const lettersRef = useRef([])
    const subtitleRef = useRef(null)
    const ctaRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'bounce.out' } })

        // Set initial states - letters way above the viewport
        lettersRef.current.forEach((letter, i) => {
            if (letter) {
                gsap.set(letter, {
                    y: -800 - (Math.random() * 400),
                    opacity: 0,
                    rotation: (Math.random() - 0.5) * 60
                })
            }
        })

        gsap.set(subtitleRef.current, { opacity: 0, y: 30 })
        gsap.set(ctaRef.current, { opacity: 0, y: 30 })

        // Animate each letter falling with stagger
        lettersRef.current.forEach((letter, i) => {
            if (letter) {
                tl.to(letter, {
                    y: 0,
                    opacity: 1,
                    rotation: 0,
                    duration: 1.2,
                    ease: 'bounce.out'
                }, 0.08 * i)
            }
        })

        // After letters settle, show subtitle and CTA
        tl.to(subtitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.3')
            .to(ctaRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.4')

    }, [])

    const letters = 'PRIORITIZE'.split('')

    return (
        <div className="landing" ref={containerRef}>
            <div className="landing-bg" />

            <div className="landing-content">
                <div className="falling-letters">
                    {letters.map((letter, i) => (
                        <span
                            key={i}
                            ref={el => lettersRef.current[i] = el}
                            className="falling-letter"
                        >
                            {letter}
                        </span>
                    ))}
                </div>

                <p className="landing-subtitle" ref={subtitleRef}>
                    Stop guessing what to work on next. Intelligent scoring surfaces
                    your highest-value tasks based on effort, impact, and urgency.
                </p>

                <button className="landing-cta" ref={ctaRef} onClick={onGetStarted}>
                    Get Started
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Landing
