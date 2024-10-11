import { useState } from "react"

type CounterProps = {
    initialValue?: number
}

type CounterState = {
    counter: number,
    clicks: number
}

export default function CounterBy({initialValue = 0}: CounterProps) {
    const [counterState, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0,
    })
    
    const handleClick = (value: number) => {
        setCounterState(({counter, clicks}) => ({
            counter: counter + value,
            clicks: clicks + 1,
        }))
    }

  return (
    <>
        <h1>Counter By: { counterState.counter }</h1>
        <h1>Clicks By: { counterState.clicks }</h1>

        <button onClick={() => handleClick(1)}>+1</button>
        <button onClick={() => handleClick(5)}>+5</button>
    </>
  )
}