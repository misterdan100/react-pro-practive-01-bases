import { useState } from "react"

export default function CounterReducerComponent() {
    const [counter, setCounter] = useState<number>(0)

    const handleClick = () => {
        setCounter(state => state + 1)
    }

  return (
    <>
        <h1>Counter Reducer: { counter }</h1>

        <button onClick={handleClick}>
            +1
        </button>
    </>
  )
}