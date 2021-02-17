// combine reducer function
const combineReducers = (...reducers) => (state: any, action: any) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

export default combineReducers;
