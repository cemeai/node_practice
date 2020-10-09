import { INITIALIZE_COUNTDOWN, RESET_COUNTDOWN } from "./actions.types";

export const intializeCountdown = (countdown: number) => ({
  type: INITIALIZE_COUNTDOWN,
  payload: {
    countdown,
  },
});

export const resetCountdown = () => ({
  type: RESET_COUNTDOWN,
});
