import { CounterActions } from "../actions/actions";
import { INITIAL_STATE } from "../CounterReducer";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (state: CounterState, action: CounterActions): CounterState => {

    switch(action.type) {
      case 'increaseBy':
      return {
        ...state,
        previous: state.counter,
        counter: state.counter + action.payload.value,
        changes: state.changes + 1
      }
  
      case 'reset':
        return {
          ...INITIAL_STATE
        }
      default: 
        return state;
    } 
  }