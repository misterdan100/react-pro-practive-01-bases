export type CounterActions =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

// export const doReset = (): CounterActions => {
//     return {
//         type: 'reset'
//     }
// }

export const doReset = (): CounterActions => ({type: 'reset'})