import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import products from './products';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        products,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
