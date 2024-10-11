import { useCounter } from "../hooks/useCounter";

const MAXIMUN_COUNT = 10;

export default function CounterHook() {
    
    const { counter, elementToAnimate, handleClick } = useCounter({MAXIMUN_COUNT})

  return (
    <>
        <h1>Counter Hook:</h1>
        <h2 ref={elementToAnimate}>{ counter }</h2>

        <button onClick={handleClick}>
            +1
        </button>
    </>
  )
}