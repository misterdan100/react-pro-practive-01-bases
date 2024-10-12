type ReducerActions =
  | { type: "increasey"; payload: { value: number } }
  | { type: "reset" };

interface ReducerState {
  counter: number;
  changes: number;
  previous: number;
}

const InitialState: ReducerState = {
  counter: 0,
  changes: 0,
  previous: 0,
};

export const ReducerDan = (
  state: ReducerState,
  actions: ReducerActions
): ReducerState => {
  switch (actions.type) {
    case "reset":
      return { ...InitialState };
    case 'increasey': 
    return {
        ...state,
        counter: state.counter + actions.payload.value,
        changes: state.changes + 1,
        previous: state.counter,
    }
    default:
      return { ...state };
  }
};
