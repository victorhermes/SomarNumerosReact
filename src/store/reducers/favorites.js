const INITIAL_STATE = {
  number: 0
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SOMAR":
      return { ...state, number: parseInt(action.payload.number, 0) + 1 };
    default:
      return state;
  }
}
