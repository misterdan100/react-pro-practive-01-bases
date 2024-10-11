import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

export default function CounterEffect() {
    const [counter, setCounter] = useState<number>(5)
    const counterElement = useRef<HTMLHeadingElement>(null)

    const handleClick = () => {
        setCounter(state => state < 10 ? state + 1 : state)
    }

    useEffect(() => {

        if(counter < 10 ) return;

        console.log('%cConsole log styled', 'color: red; background-color: white;')

        const tl = gsap.timeline()

        tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out' })
        tl.to(counterElement.current, {y: 10, duration: 1, ease: 'ease.out' })
    }, [counter])


  return (
    <>
        <h1>Counter Effect:</h1>
        <h2 ref={counterElement}>{ counter }</h2>

        <button onClick={handleClick}>
            +1
        </button>
    </>
  )
}