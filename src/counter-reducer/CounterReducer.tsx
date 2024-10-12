import { useReducer } from "react"
import { CounterState } from "./interfaces/interfaces"
import { counterReducer } from "./state/counterReducer"

export const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}

export default function CounterReducerComponent() {
    const [state, dispatch] = useReducer( counterReducer, INITIAL_STATE)

    const handleClick = () => {
        dispatch({ type: 'increaseBy', payload: {value: 10}})
    }

  return (
    <>
        <h1>Counter Reducer: { state.counter }</h1>

        <h2>Previos: {state.previous}</h2>

        <h2>Changes: {state.changes}</h2>

        <button onClick={handleClick}>
            +1
        </button>
    </>
  )
}