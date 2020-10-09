import { INITIALIZE_COUNTDOWN, RESET_COUNTDOWN } from "./actions.types";

type Actions = {
  type: typeof INITIALIZE_COUNTDOWN | typeof RESET_COUNTDOWN;
};

const initialState = {
  countdown: 0,
};

export type Store = typeof initialState;

const reducer = (state: Store = initialState, action: any) => {
  switch (action.type) {
    case INITIALIZE_COUNTDOWN: {
      const { countdown } = action.payload;
      return {
        ...state,
        countdown,
      };
    }
    case RESET_COUNTDOWN: {
      return {
        ...state,
        countdown: 10,
      };
    }
    default:
      return state;
  }
};

export default reducer;
