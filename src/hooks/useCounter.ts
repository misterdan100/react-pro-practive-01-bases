import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap/gsap-core";

interface Props {
    MAXIMUN_COUNT: number
}

export const useCounter = ({MAXIMUN_COUNT}: Props) => {
    const [counter, setCounter] = useState<number>(5)
    const elementToAnimate = useRef<any>(null)
    const tl = useRef(gsap.timeline())

    const handleClick = () => {
        setCounter(state => state < MAXIMUN_COUNT ? state + 1 : state)
    }

    useLayoutEffect(() => {
        tl.current.to(elementToAnimate.current, {y: -10, duration: 0.2, ease: 'ease.out' })
                  .to(elementToAnimate.current, {y: 0, duration: 1, ease: 'bounce.out' })
                  .pause()

    }, [])

    useEffect(() => {
        tl.current.play(0)
    }, [counter])

    return {
        counter,
        elementToAnimate,
        handleClick,
    }
}

