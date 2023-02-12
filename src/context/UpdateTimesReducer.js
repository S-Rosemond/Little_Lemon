import { fetchAPI } from "../util/fakeApi";

export default function updateTimes(state, { payload, type }) {
  switch (type) {
    case "updateTimes":
      return { ...state, currentValue: payload };
    case "today":
      return { ...state, currentValue: state.initialValue };
    default:
      return state;
  }
}

export function initializeTimes(todayISOString) {
  const initialValue = fetchAPI(todayISOString);
  return {
    initialValue,
    currentValue: initialValue,
  };
}
