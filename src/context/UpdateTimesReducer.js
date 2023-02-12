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

export function initializeTimes() {
  const initialValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  return {
    initialValue,
    currentValue: initialValue,
  };
}
