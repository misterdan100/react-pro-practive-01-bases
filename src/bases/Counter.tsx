import { useState } from "react"

type CounterProps = {
    initialValue?: number
}

export default function Counter({initialValue = 0}: CounterProps) {
    const [counter, setCounter] = useState<number>(initialValue)

    const handleClick = () => {
        setCounter(state => state + 1)
    }

  return (
    <>
        <h1>Counter: { counter }</h1>

        <button onClick={handleClick}>
            +1
        </button>
    </>
  )
}