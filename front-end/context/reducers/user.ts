export function userReducer(
  state: any,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
