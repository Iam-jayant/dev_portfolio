"use client"

import { useEffect, useState } from "react"

type ScrollDirection = "up" | "down" | "top"

export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("top")
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        let ticking = false

        const updateScrollDirection = () => {
            const scrollY = window.scrollY

            // At the top of the page
            if (scrollY < 10) {
                setScrollDirection("top")
            } else {
                // Determine direction based on scroll position change
                const direction = scrollY > lastScrollY ? "down" : "up"

                // Only update if direction changed and we scrolled more than 5px
                if (
                    direction !== scrollDirection &&
                    Math.abs(scrollY - lastScrollY) > 5
                ) {
                    setScrollDirection(direction)
                }
            }

            setLastScrollY(scrollY)
            ticking = false
        }

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDirection)
                ticking = true
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [scrollDirection, lastScrollY])

    return scrollDirection
}
