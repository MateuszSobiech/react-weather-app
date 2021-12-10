import { createStore } from 'redux';

export const changeInput = (payload) => {
  return {
    type: 'input/change',
    payload: payload,
  };
};

const initialState = 'Warsaw';

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'input/change':
      return action.payload;
    default:
      return state;
  }
};

export const store = createStore(inputReducer);
