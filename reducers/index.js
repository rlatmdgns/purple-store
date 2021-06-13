import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import products from './products';
import carts from './carts';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        products,
        carts,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
